#!/usr/bin/env node
/**
 * Daily Grok content agent — drafts blog + social copy.
 * Prefer XAI_API_KEY (Grok); falls back to OPENAI_API_KEY.
 * Use --write to append a staged post into src/content/blog/posts.ts
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

const topic =
  arg('topic') ||
  process.env.CONTENT_TOPIC ||
  'How AI agents save SMBs time on marketing and operations'
const shouldWrite = process.argv.includes('--write')

const xaiKey = process.env.XAI_API_KEY
const openaiKey = process.env.OPENAI_API_KEY

const system = `You are the AI Transformation LLC content agent. Write practical, non-hype B2B content.
Return STRICT JSON with keys:
slug (kebab-case), title, excerpt, tags (array of 2-4 strings), socialHook (tweet-length+), body (array of 4-7 short paragraphs).
Focus on agents, automation, ROI, and clear next steps. No fake statistics.`

const user = `Topic: ${topic}
Company voice: expert, direct, lead-by-example. Mention that drafts are human-approved before publish when relevant.`

async function callModel() {
  if (!xaiKey && !openaiKey) {
    return {
      slug: topic
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
        .slice(0, 60),
      title: topic,
      excerpt: `Draft on “${topic}” — connect XAI_API_KEY or OPENAI_API_KEY to generate with Grok/OpenAI.`,
      tags: ['agents', 'draft'],
      socialHook: `Working on: ${topic}. We draft with agents, approve as humans, then publish.`,
      body: [
        `This is a staged placeholder for: ${topic}.`,
        'Wire XAI_API_KEY (Grok) or OPENAI_API_KEY, re-run with --write, then human-review before merge.',
        'See /agents for the full orchestration playbook we run and sell.',
      ],
      _offline: true,
    }
  }

  const useXai = Boolean(xaiKey)
  const url = useXai
    ? 'https://api.x.ai/v1/chat/completions'
    : 'https://api.openai.com/v1/chat/completions'
  const key = useXai ? xaiKey : openaiKey
  const model = useXai ? 'grok-2-latest' : 'gpt-4o-mini'

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
  const entry = `  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(draft.title)},
    excerpt: ${JSON.stringify(draft.excerpt)},
    date: ${JSON.stringify(today)},
    author: 'AI Transformation LLC',
    tags: ${JSON.stringify(draft.tags || ['agents'])},
    socialHook: ${JSON.stringify(draft.socialHook)},
    generatedBy: 'grok-content-agent',
    body: ${JSON.stringify(draft.body || [], null, 6).replace(/\n/g, '\n    ')},
  },
`

  if (src.includes(`slug: ${JSON.stringify(slug)}`)) {
    console.log('Post slug already exists — skipping write:', slug)
    return slug
  }

  src = src.replace('export const blogPosts: BlogPost[] = [', `export const blogPosts: BlogPost[] = [\n${entry}`)
  writeFileSync(file, src)
  console.log('Appended draft to posts.ts:', slug)
  return slug
}

const draft = await callModel()
console.log(JSON.stringify({ provider: xaiKey ? 'grok' : openaiKey ? 'openai' : 'offline', draft }, null, 2))

if (shouldWrite) {
  const slug = appendPost(draft)
  console.log(`Preview: /blog/${slug}`)
  console.log('Next: human review → PR → merge → schedule social.')
}
