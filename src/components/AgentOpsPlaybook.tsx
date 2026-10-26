'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  Bot,
  FileText,
  Share2,
  UserCheck,
  Rocket,
  LineChart,
  ArrowRight,
  Check,
  Clock,
} from 'lucide-react'

const dailySteps = [
  {
    icon: CalendarDays,
    title: '1. Pull the content brief',
    detail:
      'Agent reads today’s topic from the content calendar (industry pain, service proof, or lead-magnet angle).',
  },
  {
    icon: Bot,
    title: '2. Grok drafts the assets',
    detail:
      'Grok content agent generates: blog outline + full draft, SEO title, social hooks for FB/IG/X, and optional image prompts.',
  },
  {
    icon: FileText,
    title: '3. Stage on the site',
    detail:
      'Draft lands in the blog content store (or a PR). Marked “Grok agent draft” so visitors see we lead by example.',
  },
  {
    icon: Share2,
    title: '4. Package social copy',
    detail:
      'Captions + hashtags queued for Starter Social / Social Growth scheduling—or Ads package creative variants.',
  },
  {
    icon: UserCheck,
    title: '5. Human approval gate',
    detail:
      'Nothing publishes automatically. A human reviews tone, claims, and compliance—then approves.',
  },
  {
    icon: Rocket,
    title: '6. Publish & schedule',
    detail:
      'Blog goes live; social posts schedule to Facebook/Instagram (and X drafts when available).',
  },
  {
    icon: LineChart,
    title: '7. Report & learn',
    detail:
      'Weekly digest: what ranked, what converted, what to double down on. Feeds next week’s calendar.',
  },
]

const clientInstall = [
  {
    phase: 'Week 1',
    title: 'Discover',
    items: ['Brand voice brief', 'Offer + CTA map', 'Channel priorities', 'Compliance rules'],
  },
  {
    phase: 'Week 2',
    title: 'Wire the agent',
    items: [
      'Grok / LLM credentials',
      'Content calendar template',
      'Blog CMS or repo path',
      'Social scheduling tools',
    ],
  },
  {
    phase: 'Week 3',
    title: 'Pilot',
    items: ['5 agent drafts', 'Approval checklist', 'Publish one blog + 3 posts', 'Measure time saved'],
  },
  {
    phase: 'Week 4',
    title: 'Operate',
    items: ['Daily run schedule', 'Escalation path', 'Reporting cadence', 'Optional ads handoff'],
  },
]

const stack = [
  { label: 'Brain', value: 'Grok (xAI) content agent — OpenAI fallback supported' },
  { label: 'Blog', value: 'This Next.js site (/blog) as the source of truth' },
  { label: 'Social', value: 'Starter $149 · Growth $299 · Ads+Social $499 packages' },
  { label: 'Orchestration', value: 'Daily cron / Cursor Cloud Agent · human approval gate' },
  { label: 'Guardrails', value: 'No auto-publish · brand voice · claim review · audit log' },
]

export default function AgentOpsPlaybook() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      {/* Daily pipeline */}
      <section className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overline mb-4 text-center"
        >
          Daily pipeline (we run this on ourselves)
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-10 text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          From brief → Grok draft → approve → publish
        </motion.h2>

        <div className="space-y-3">
          {dailySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass-panel flex gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual flow */}
      <section className="mb-20">
        <div className="glass-panel overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2 text-violet-300">
            <Clock className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wider">Typical weekday runtime</span>
          </div>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
            {['Calendar', 'Grok agent', 'Blog draft', 'Social pack', 'Human ✓', 'Live'].map(
              (label, i, arr) => (
                <div key={label} className="flex items-center gap-3 md:flex-1 md:justify-center">
                  <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-white">
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-zinc-600 md:block" />
                  )}
                </div>
              )
            )}
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            ~15–25 minutes of agent work · ~5–10 minutes human review · daily cadence
          </p>
        </div>
      </section>

      {/* Client install */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-3 text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          How we install this for your company
        </motion.h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-zinc-400">
          Same steps we use internally—scoped to your brand, offers, and channels.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientInstall.map((phase, i) => (
            <motion.article
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-panel rounded-3xl p-5"
            >
              <p className="text-xs uppercase tracking-wider text-violet-300">{phase.phase}</p>
              <h3 className="font-display mt-1 text-xl text-white">{phase.title}</h3>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-16">
        <h2 className="font-display mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
          Stack we demonstrate publicly
        </h2>
        <div className="overflow-hidden rounded-3xl border border-white/8">
          {stack.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[120px_1fr] border-b border-white/5 px-4 py-4 last:border-b-0 sm:grid-cols-[160px_1fr] sm:px-6"
            >
              <span className="text-sm font-medium text-violet-300">{row.label}</span>
              <span className="text-sm text-zinc-300">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link href="/#booking" className="cta-pill">
          Orchestrate agents for my company
        </Link>
        <p className="mt-4 text-sm text-zinc-500">
          Pair with{' '}
          <Link href="/#social-ads" className="text-violet-300 hover:underline">
            Social Growth ($299)
          </Link>{' '}
          or{' '}
          <Link href="/#social-ads" className="text-violet-300 hover:underline">
            Facebook Ads + Social ($499)
          </Link>{' '}
          for full distribution.
        </p>
      </div>
    </div>
  )
}
