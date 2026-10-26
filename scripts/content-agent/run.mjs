#!/usr/bin/env node
/**
 * Grok AI Marketing Bot — daily blog + social drafts for AI Transformation LLC.
 * Prefer XAI_API_KEY (Grok); falls back to OPENAI_API_KEY.
 * Use --write to append a staged post into src/content/blog/posts.ts
 *
 * Env:
 *   XAI_API_KEY / OPENAI_API_KEY  — required for real drafts
 *   XAI_MODEL                     — default grok-4.7
 *   CONTENT_TOPIC                 — override topic
 *   REQUIRE_API_KEY=1             — exit 1 if no key (CI)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '../..')

function arg(name, fallback = '') {
  const i = process.argv.indexOf(`--${name}`)
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1]
  return fallback
}

function weekdayTopic() {
  const file = resolve(__dirname, 'topics.json')
  const topics = JSON.parse(readFileSync(file, 'utf8'))
  // UTC weekday 1–7 (Mon–Sun); rotate through calendar
  const dayIndex = (Math.floor(Date.now() / 86400000) % topics.length + topics.length) % topics.length
  return topics[dayIndex]
}

const topic = arg('topic') || process.env.CONTENT_TOPIC || weekdayTopic()
const shouldWrite = process.argv.includes('--write')
const requireKey = process.env.REQUIRE_API_KEY === '1' || process.argv.includes('--require-key')

function normalizeSecret(value) {
  if (!value) return ''
  return String(value).trim().replace(/^['"]|['"]$/g, '')
}

const xaiKey = normalizeSecret(process.env.XAI_API_KEY)
const openaiKey = normalizeSecret(process.env.OPENAI_API_KEY)
const xaiModel = normalizeSecret(process.env.XAI_MODEL) || 'grok-3-latest'

if (requireKey && !xaiKey && !openaiKey) {
  console.error(
    'Missing XAI_API_KEY (preferred) or OPENAI_API_KEY. Add it as a GitHub Actions secret, then re-run.',
  )
  process.exit(1)
}

const system = `You are the Grok AI Marketing Bot for AI Transformation LLC (aitransformationllc.com).
Voice: expert, direct, practical, zero hype. Lead-by-example — we run agents on ourselves before selling them.
Positioning: AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.
Offers flex under that umbrella: $149+ social packages, AI receptionists/agents, custom software (~$5k+), larger tech implementations, SaaS rebuilds.
Phone: (860) 705-3417. Email: info@aitransformationllc.com. Book: discovery call via Calendly on site.
Return STRICT JSON only (no markdown fences) with keys:
- slug (kebab-case, unique, SEO-friendly)
- title (compelling, question or outcome-led when natural)
- excerpt (1–2 sentences, under 160 chars ideal)
- tags (array of 2–4 lowercase strings)
- socialHook (primary short hook usable on X / LinkedIn)
- social (object with facebook, instagram, linkedin, x — each a ready-to-post caption; IG can include line breaks as \\n)
- cta (one sentence pointing to /services, /#social-ads, /blog, or booking)
- body (array of 5–8 short paragraphs; weave 1 internal path like /services or /blog naturally; no fake statistics; mention human approval when relevant)`

const user = `Write today's marketing draft.
Topic: ${topic}
Audience: U.S. SMB owners / operators (HVAC, dental, real estate, professional services, etc.).
Goal: educate + soft CTA toward a discovery call or Social Growth package.
Date context: ${new Date().toISOString().slice(0, 10)}`

async function callModel() {
  if (!xaiKey && !openaiKey) {
    return {
      slug: topic
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
        .slice(0, 60),
      title: topic,
      excerpt: `Draft on “${topic}” — connect XAI_API_KEY to generate with the Grok marketing bot.`,
      tags: ['agents', 'draft'],
      socialHook: `Working on: ${topic}. We draft with our Grok marketing bot, approve as humans, then publish.`,
      social: {
        facebook: `Working on: ${topic}`,
        instagram: `Working on: ${topic}`,
        linkedin: `Working on: ${topic}`,
        x: `Working on: ${topic}`,
      },
      cta: 'Book a discovery call at aitransformationllc.com',
      body: [
        `This is a staged placeholder for: ${topic}.`,
        'Add XAI_API_KEY (Grok), re-run with --write, then human-review before merge.',
        'See /#social-ads for the social content engine we run and sell.',
      ],
      _offline: true,
    }
  }

  const useXai = Boolean(xaiKey)
  const url = useXai
    ? 'https://api.x.ai/v1/chat/completions'
    : 'https://api.openai.com/v1/chat/completions'
  const key = useXai ? xaiKey : openaiKey
  const model = useXai ? xaiModel : 'gpt-4o-mini'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      response_format: useXai ? undefined : { type: 'json_object' },
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Model error ${res.status}: ${text}`)
  }

  const data = await res.json()
  const raw = data.choices?.[0]?.message?.content || '{}'
  const jsonMatch = raw.match(/\{[\s\S]*\}/)
  return JSON.parse(jsonMatch ? jsonMatch[0] : raw)
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 70)
}

function appendPost(draft) {
  const file = resolve(root, 'src/content/blog/posts.ts')
  if (!existsSync(file)) throw new Error('posts.ts missing')
  let src = readFileSync(file, 'utf8')
  const today = new Date().toISOString().slice(0, 10)
  const slug = slugify(draft.slug || draft.title)
  const social = draft.social || {}
  const socialHook =
    draft.socialHook || social.x || social.linkedin || social.facebook || ''

  const entry = `  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(draft.title)},
    excerpt: ${JSON.stringify(draft.excerpt)},
    date: ${JSON.stringify(today)},
    author: 'AI Transformation LLC',
    tags: ${JSON.stringify(draft.tags || ['agents', 'marketing'])},
    socialHook: ${JSON.stringify(socialHook)},
    generatedBy: 'grok-content-agent',
    body: ${JSON.stringify(draft.body || [], null, 6).replace(/\n/g, '\n    ')},
  },
`

  if (src.includes(`slug: ${JSON.stringify(slug)}`)) {
    console.log('Post slug already exists — skipping write:', slug)
    return { slug, skipped: true }
  }

  src = src.replace(
    'export const blogPosts: BlogPost[] = [',
    `export const blogPosts: BlogPost[] = [\n${entry}`,
  )
  writeFileSync(file, src)
  console.log('Appended draft to posts.ts:', slug)
  return { slug, skipped: false }
}

const draft = await callModel()
const provider = xaiKey ? `grok (${xaiModel})` : openaiKey ? 'openai' : 'offline'
console.log(JSON.stringify({ provider, topic, draft }, null, 2))

// Always emit a social pack summary for the PR / human scheduler
const social = draft.social || {}
console.log('\n--- SOCIAL PACK (schedule after merge) ---')
console.log('X / LinkedIn hook:', draft.socialHook || social.x || '')
if (social.facebook) console.log('Facebook:', social.facebook)
if (social.instagram) console.log('Instagram:', social.instagram)
if (social.linkedin) console.log('LinkedIn:', social.linkedin)
if (social.x) console.log('X:', social.x)
if (draft.cta) console.log('CTA:', draft.cta)

if (shouldWrite) {
  const { slug } = appendPost(draft)
  // Persist social pack next to the run for workflow PR body
  const packPath = resolve(root, 'scripts/content-agent/last-social-pack.json')
  writeFileSync(
    packPath,
    JSON.stringify(
      {
        slug,
        title: draft.title,
        socialHook: draft.socialHook,
        social,
        cta: draft.cta,
        generatedAt: new Date().toISOString(),
        provider,
      },
      null,
      2,
    ),
  )
  console.log(`\nPreview: /blog/${slug}`)
  console.log('Next: human review → merge PR → schedule social pack.')
}
