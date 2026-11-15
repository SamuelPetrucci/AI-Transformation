'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Bot,
  Megaphone,
  Settings2,
  Mail,
  PiggyBank,
  Search,
  ArrowUpRight,
  ArrowRight,
  Check,
  Sparkles,
  Server,
  Calendar,
  MessageSquare,
  TrendingDown,
  Workflow,
  Database,
  Puzzle,
  Shield,
  Users,
  Layers,
} from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import ValueFlow from './ValueFlow'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'

type DemoId = 'ops' | 'agents' | 'marketing' | 'website'

const demos: {
  id: DemoId
  label: string
  icon: typeof Bot
  title: string
  blurb: string
}[] = [
  {
    id: 'ops',
    label: 'Own your tech',
    icon: PiggyBank,
    title: 'Own your tech stack. Reduce costs. Own your data.',
    blurb:
      'We rebuild the CRM, booking tool, or platform you rent today into software you own—self-hosted, improved, integrated, at a fraction of SaaS cost, with your data under your control.',
  },
  {
    id: 'agents',
    label: 'AI Agents',
    icon: Bot,
    title: 'Fine-tuned for the work you hate repeating',
    blurb:
      'We train agents on repetitive, error-prone tasks—then queue the output for your review before anything goes live.',
  },
  {
    id: 'marketing',
    label: 'Content & marketing',
    icon: Megaphone,
    title: 'Content engines across every platform',
    blurb:
      'Your product data → AI script → create → you approve → schedule. Consistent branding on Instagram, Facebook, LinkedIn, X, TikTok, YouTube.',
  },
  {
    id: 'website',
    label: 'Custom software',
    icon: Layers,
    title: 'Apps within apps—built for how you work',
    blurb:
      'CRMs, automated messaging, applicant tracking, AI-powered tools—purpose-built software nested into your operations, not another SaaS rent payment.',
  },
]

function AgentDemo() {
  const steps = [
    { label: 'Inbound lead via web form', detail: 'HVAC quote request · Dallas' },
    { label: 'Agent enriches + scores', detail: 'CRM match · Budget signal: mid' },
    { label: 'Draft reply + book slot', detail: 'SMS + email · Calendar hold' },
    { label: 'Human notified', detail: 'Warm handoff with full context' },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      PRODUCT_MOTION.stepMs,
    )
    return () => clearInterval(t)
  }, [steps.length])

  return (
    <div className="space-y-4">
      <div className="glass-panel rounded-2xl p-4">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-signal">
          <Sparkles className="h-3.5 w-3.5" />
          Live agent run
        </div>
        <div className="space-y-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              animate={{
                opacity: i <= active ? 1 : 0.35,
                scale: i === active ? 1.01 : 1,
              }}
              transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 ${
                i === active
                  ? 'border-signal/40 bg-signal/15'
                  : i < active
                    ? 'border-[var(--line)] bg-white/40'
                    : 'border-transparent bg-transparent'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  i <= active ? 'bg-signal text-paper' : 'bg-paper-2 text-ink-soft/70'
                }`}
              >
                {i < active ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{s.label}</p>
                <p className="text-xs text-ink-soft">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { k: 'Handle time', v: '42s' },
          { k: 'Booked', v: 'Yes' },
          { k: 'Cost/lead', v: '$0.18' },
        ].map((m) => (
          <div key={m.k} className="rounded-xl border border-[var(--line)] bg-white/40 px-2 py-3">
            <p className="text-ink-soft/70">{m.k}</p>
            <p className="mt-1 font-display text-sm text-signal">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const customApps = [
  {
    id: 'crm',
    label: 'CRM',
    icon: Users,
    idea: 'Own your pipeline—deals, stages, and follow-ups without per-seat tax.',
  },
  {
    id: 'messaging',
    label: 'Messaging',
    icon: MessageSquare,
    idea: 'Automated SMS & email that replies, qualifies, and books while you work.',
  },
  {
    id: 'ats',
    label: 'ATS',
    icon: Layers,
    idea: 'Applicant tracking built for your hiring flow—not a generic HR suite.',
  },
  {
    id: 'ai',
    label: 'AI apps',
    icon: Sparkles,
    idea: 'Custom AI panels that surface answers, drafts, and next actions from your data.',
  },
] as const

function CrmAppSketch({ beat }: { beat: number }) {
  const stages = [
    {
      name: 'New',
      deals: [
        { name: 'HVAC quote', value: '$4.2k' },
        { name: 'Roof consult', value: '$1.8k' },
      ],
    },
    {
      name: 'Qualified',
      deals: [{ name: 'Fleet install', value: '$12k' }],
    },
    {
      name: 'Won',
      deals: [{ name: 'Office retrofit', value: '$28k' }],
    },
  ]
  const highlight = beat % 3

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft/70">
          Pipeline · This week
        </p>
        <span className="rounded-md bg-signal/15 px-2 py-0.5 text-[10px] font-semibold text-signal">
          3 stages live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {stages.map((col, i) => (
          <div key={col.name} className="space-y-1.5">
            <p className="text-[10px] font-medium text-ink-soft">{col.name}</p>
            {col.deals.map((deal, di) => {
              const active = i === highlight && di === 0
              return (
                <motion.div
                  key={deal.name}
                  animate={{
                    y: active ? -2 : 0,
                    borderColor: active ? 'rgba(15,143,117,0.45)' : 'rgba(12,26,23,0.08)',
                    backgroundColor: active ? 'rgba(15,143,117,0.12)' : 'rgba(255,255,255,0.7)',
                  }}
                  transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                  className="rounded-lg border px-2 py-1.5"
                >
                  <p className="truncate text-[11px] font-medium text-ink">{deal.name}</p>
                  <p className="text-[10px] text-signal">{deal.value}</p>
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagingAppSketch({ beat }: { beat: number }) {
  const threads = [
    { from: 'Maya R.', preview: 'Can you send Saturday slots?', tag: 'SMS' },
    { from: 'Jordan K.', preview: 'Quote looks good—book it.', tag: 'Email' },
    { from: 'Front desk', preview: 'Auto-reply sent · 2m ago', tag: 'Bot' },
  ]
  const active = beat % threads.length
  const replies = [
    'Hi Maya—Saturday 9am or 1pm both open. Reply 1 or 2 to lock it in.',
    'Great—calendar hold placed. Confirmation text on the way.',
    'Lead scored warm · CRM updated · owner pinged.',
  ]

  return (
    <div className="grid gap-2 sm:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-1.5">
        {threads.map((t, i) => (
          <motion.div
            key={t.from}
            animate={{
              opacity: i === active ? 1 : 0.55,
              x: i === active ? 2 : 0,
            }}
            className={`rounded-lg border px-2.5 py-2 ${
              i === active ? 'border-signal/40 bg-signal/10' : 'border-[var(--line)] bg-white/60'
            }`}
          >
            <div className="flex items-center justify-between gap-1">
              <p className="text-[11px] font-medium text-ink">{t.from}</p>
              <span className="text-[9px] uppercase tracking-wider text-ink-soft/70">{t.tag}</span>
            </div>
            <p className="mt-0.5 truncate text-[10px] text-ink-soft">{t.preview}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-between rounded-xl border border-[var(--line)] bg-gradient-to-b from-white/80 to-paper-2/80 p-3">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-wider text-ink-soft/70">Auto reply</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-xs leading-relaxed text-ink"
            >
              {replies[active]}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.div
          key={`send-${active}`}
          initial={{ scale: 0.96, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-3 inline-flex items-center gap-1.5 self-end rounded-full bg-signal px-2.5 py-1 text-[10px] font-semibold text-paper"
        >
          <Mail className="h-3 w-3" />
          Sent · logged to CRM
        </motion.div>
      </div>
    </div>
  )
}

function AtsAppSketch({ beat }: { beat: number }) {
  const columns = [
    {
      name: 'Applied',
      people: ['Alex Chen', 'Sam Ortiz'],
    },
    {
      name: 'Interview',
      people: ['Riley Park'],
    },
    {
      name: 'Offer',
      people: ['Jordan Lee'],
    },
  ]
  const moving = beat % 3

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft/70">
          Hiring board · Ops roles
        </p>
        <span className="text-[10px] text-signal">4 candidates</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {columns.map((col, ci) => (
          <div
            key={col.name}
            className="min-h-[7.5rem] rounded-xl border border-[var(--line)] bg-white/50 p-2"
          >
            <p className="mb-2 text-[10px] font-medium text-ink-soft">{col.name}</p>
            <div className="space-y-1.5">
              {col.people.map((person, pi) => {
                const pulse = ci === moving && pi === 0
                return (
                  <motion.div
                    key={person}
                    layout
                    animate={{
                      scale: pulse ? 1.03 : 1,
                      boxShadow: pulse
                        ? '0 0 0 1px rgba(15,143,117,0.35)'
                        : '0 0 0 0 rgba(0,0,0,0)',
                    }}
                    className="rounded-md bg-paper-2/90 px-2 py-1.5 text-[11px] font-medium text-ink"
                  >
                    {person}
                  </motion.div>
                )
              })}
              {ci === 1 && moving === 1 ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-md border border-dashed border-signal/40 bg-signal/10 px-2 py-1.5 text-[10px] text-signal"
                >
                  Scorecard ready
                </motion.div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AiAppSketch({ beat }: { beat: number }) {
  const insights = [
    { title: 'Next best action', body: 'Call Fleet install—quote expires Friday.' },
    { title: 'Draft ready', body: 'Follow-up email for Maya R. awaiting send.' },
    { title: 'Ops alert', body: '2 bookings unconfirmed · suggest SMS nudge.' },
  ]
  const active = beat % insights.length

  return (
    <div className="grid gap-2 sm:grid-cols-[1fr_1.15fr]">
      <div className="space-y-2 rounded-xl border border-[var(--line)] bg-white/60 p-3">
        <div className="flex items-center gap-2 text-signal">
          <Bot className="h-3.5 w-3.5" />
          <p className="text-[10px] font-semibold uppercase tracking-wider">Business AI</p>
        </div>
        <p className="text-xs text-ink-soft">Ask anything about leads, staff, or inventory.</p>
        <div className="rounded-lg border border-[var(--line)] bg-paper-2/80 px-2.5 py-2 text-[11px] text-ink-soft">
          “Which deals stall this week?”
        </div>
      </div>
      <div className="rounded-xl border border-signal/30 bg-signal/10 p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-signal">
              {insights[active].title}
            </p>
            <p className="mt-2 text-sm font-medium text-ink">{insights[active].body}</p>
            <div className="mt-3 flex gap-1.5">
              <span className="rounded-md bg-white/70 px-2 py-1 text-[10px] text-ink">Open CRM</span>
              <span className="rounded-md bg-signal px-2 py-1 text-[10px] font-semibold text-paper">
                Act now
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function CustomSoftwareDemo() {
  const [appIndex, setAppIndex] = useState(0)
  const [beat, setBeat] = useState(0)
  const app = customApps[appIndex]
  const AppIcon = app.icon

  useEffect(() => {
    const t = setInterval(() => {
      setAppIndex((i) => (i + 1) % customApps.length)
      setBeat(0)
    }, PRODUCT_MOTION.rotateMs)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBeat((b) => b + 1), PRODUCT_MOTION.beatMs)
    return () => clearInterval(t)
  }, [appIndex])

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br from-paper-2 via-white to-paper p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs text-ink-soft/70">ops.yourbrand.com</span>
          </div>
          <span className="hidden text-[10px] uppercase tracking-wider text-ink-soft/60 sm:inline">
            Suite · apps inside your stack
          </span>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {customApps.map((a, i) => {
            const Icon = a.icon
            const on = i === appIndex
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => {
                  setAppIndex(i)
                  setBeat(0)
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition ${
                  on
                    ? 'border-signal/50 bg-signal/15 text-ink'
                    : 'border-[var(--line)] bg-white/50 text-ink-soft hover:border-signal/35 hover:text-ink'
                }`}
              >
                <Icon className="h-3 w-3" />
                {a.label}
              </button>
            )
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-white/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
            >
              <div className="mb-3 flex items-center gap-2 border-b border-[var(--line)] pb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal/15 text-signal">
                  <AppIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">{app.label}</p>
                  <p className="text-[10px] text-ink-soft/70">Custom module · you own the code</p>
                </div>
              </div>
              {app.id === 'crm' ? <CrmAppSketch beat={beat} /> : null}
              {app.id === 'messaging' ? <MessagingAppSketch beat={beat} /> : null}
              {app.id === 'ats' ? <AtsAppSketch beat={beat} /> : null}
              {app.id === 'ai' ? <AiAppSketch beat={beat} /> : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute -bottom-1 right-6 hidden h-8 w-28 rounded-t-lg border border-[var(--line)] bg-paper-2/80 sm:block" />
        <div className="pointer-events-none absolute bottom-0 right-10 hidden h-5 w-20 rounded-t-md border border-[var(--line)] bg-white/70 sm:block" />
      </div>

      <p className="text-sm text-ink-soft">
        <span className="font-medium text-ink">{app.label}:</span> {app.idea}
      </p>
    </div>
  )
}

function AdsDemo() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Reach', value: '18.4k', delta: '+12%' },
          { label: 'CTR', value: '3.1%', delta: '+0.4%' },
          { label: 'Leads', value: '47', delta: '+9' },
          { label: 'CPL', value: '$6.40', delta: '−18%' },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
            <p className="text-xs text-ink-soft/70">{m.label}</p>
            <p className="mt-1 font-display text-2xl text-ink">{m.value}</p>
            <p className="mt-1 text-xs text-signal">{m.delta}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel rounded-2xl p-4">
        <p className="mb-3 text-xs uppercase tracking-wider text-ink-soft/70">Campaign pipeline</p>
        <div className="space-y-2 text-sm">
          {[
            'Creative variants generated (AI-assisted)',
            'Audience tests running on Meta',
            'Leads synced to CRM + follow-up agent',
          ].map((line) => (
            <div key={line} className="flex items-center gap-2 text-ink-soft">
              <Check className="h-4 w-4 text-signal" />
              {line}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-ink-soft">
        Pairs with Content Engine + Product Ads ($499/mo). You pay ad spend separately—we manage creative,
        targeting, and reporting.
      </p>
    </div>
  )
}

function AgentSetupDemo() {
  const stages = [
    { label: 'Connect tools', detail: 'CRM, calendar, SMS, email', icon: Database },
    { label: 'Define intents', detail: 'What the agent can / cannot do', icon: Shield },
    { label: 'Ingest knowledge', detail: 'FAQs, pricing, playbooks', icon: Layers },
    { label: 'Sandbox tests', detail: '12 scenarios before go-live', icon: Settings2 },
    { label: 'Train + launch', detail: 'Team walkthrough + monitoring', icon: Users },
  ]
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % stages.length), PRODUCT_MOTION.stepMs)
    return () => clearInterval(t)
  }, [stages.length])
  const progress = Math.round(((step + 1) / stages.length) * 100)

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
        <div className="mb-2 flex justify-between text-xs text-ink-soft">
          <span>Agent creation progress</span>
          <span className="text-signal">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-signal-bright to-signal"
            animate={{ width: `${progress}%` }}
            transition={{ duration: PRODUCT_MOTION.expand, ease: PRODUCT_EASE }}
          />
        </div>
      </div>
      <ul className="space-y-2">
        {stages.map((item, i) => {
          const done = i < step
          const active = i === step
          return (
            <li
              key={item.label}
              className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 text-sm ${
                active
                  ? 'border-signal/40 bg-signal/15'
                  : done
                    ? 'border-[var(--line)] bg-white/40'
                    : 'border-[var(--line)]'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  done || active ? 'bg-signal/20 text-signal' : 'bg-white/70 text-ink-soft/70'
                }`}
              >
                {done ? <Check className="h-3 w-3" /> : <item.icon className="h-3 w-3" />}
              </span>
              <div>
                <p className={active || done ? 'font-medium text-ink' : 'text-ink-soft/70'}>
                  {item.label}
                </p>
                <p className="text-xs text-ink-soft">{item.detail}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="text-sm text-ink-soft">
        Creation → guardrails → tests → training. Agents go live with your team ready to supervise.
      </p>
    </div>
  )
}

function MarketingDemo() {
  const posts = [
    { day: 'Mon', status: 'Approved', channel: 'LinkedIn' },
    { day: 'Wed', status: 'Scheduled', channel: 'TikTok' },
    { day: 'Fri', status: 'In review', channel: 'IG + X' },
    { day: 'Sun', status: 'Queued', channel: 'YouTube' },
  ]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {posts.map((p) => (
          <div key={p.day} className="rounded-2xl border border-[var(--line)] bg-white/40 p-3 text-center">
            <p className="text-xs text-ink-soft/70">{p.day}</p>
            <p className="mt-1 font-display text-sm text-ink">{p.channel}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-signal">{p.status}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel space-y-2 rounded-2xl p-4 text-sm text-ink-soft">
        <div className="flex items-center gap-2 text-signal">
          <Calendar className="h-4 w-4" />
          Monthly content calendar
        </div>
        <p>
          We train the agent → it drafts for any platforms you use → a human approves every piece →
          we schedule and publish.
        </p>
        <div className="flex items-center gap-2 pt-1 text-signal">
          <MessageSquare className="h-4 w-4" />
          Nurture sequences
        </div>
        <p>Lead follow-up agents reply, qualify, and book—tied to your social + ads funnel.</p>
      </div>
    </div>
  )
}

function OpsSavingsDemo() {
  const platforms = [
    {
      id: 'crm',
      name: 'CRM',
      icon: Users,
      saas: 'HubSpot / Salesforce seat tax',
      saasCost: '$800–$2,400/mo',
      rebuild: 'Your CRM — self-hosted',
      rebuildCost: 'Fixed build + low host',
      upgrades: ['Custom pipelines', 'AI lead scoring', 'SMS + email agents'],
    },
    {
      id: 'booking',
      name: 'Booking',
      icon: Calendar,
      saas: 'Calendly / Acuity / Mindbody',
      saasCost: '$50–$400/mo',
      rebuild: 'Booking you own',
      rebuildCost: 'One-time + hosting',
      upgrades: ['Deposit rules', 'Staff routing', 'CRM sync'],
    },
    {
      id: 'ops',
      name: 'Ops suite',
      icon: Layers,
      saas: 'Notion + Zapier + sheets stack',
      saasCost: '$200–$900/mo',
      rebuild: 'Unified ops app',
      rebuildCost: 'Purpose-built',
      upgrades: ['One login', 'Audit trails', 'Agent workflows'],
    },
    {
      id: 'vertical',
      name: 'Vertical SaaS',
      icon: Database,
      saas: 'Industry CRM / PMS / POS',
      saasCost: '$300–$1,500/mo',
      rebuild: 'Replicated + improved',
      rebuildCost: 'You own the code',
      upgrades: ['Missing features', 'New integrations', 'No per-seat tax'],
    },
  ]

  const bridge = [
    { icon: Search, label: 'Map what they use' },
    { icon: Workflow, label: 'Replicate workflows' },
    { icon: Server, label: 'Self-host / secure' },
    { icon: Puzzle, label: 'Improve + integrate' },
    { icon: Shield, label: 'Hand off ownership' },
  ]

  const [active, setActive] = useState(0)
  const [phase, setPhase] = useState(0)
  const platform = platforms[active]

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % bridge.length), PRODUCT_MOTION.stepMs)
    return () => clearInterval(t)
  }, [bridge.length])

  // Illustrative monthly SaaS vs rebuilt (for selected platform)
  const saasHigh = [2400, 400, 900, 1500][active]
  const rebuilt = [450, 120, 280, 380][active]
  const yearlySave = (saasHigh - rebuilt) * 12

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-soft">
        Pick a platform they already pay for. We rebuild it, self-host it, make it better, and keep
        shipping integrations—so they stop renting forever.
      </p>

      <div className="flex flex-wrap gap-2">
        {platforms.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              i === active
                ? 'border-signal/50 bg-signal/15 text-ink'
                : 'border-[var(--line)] text-ink-soft hover:border-signal/40 hover:text-ink'
            }`}
          >
            <p.icon className="h-3.5 w-3.5" />
            {p.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={platform.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch"
        >
          <div className="rounded-2xl border border-red-400/20 bg-red-500/5 p-4">
            <p className="text-[10px] uppercase tracking-wider text-red-300/80">What they rent today</p>
            <p className="mt-2 font-display text-sm text-ink">{platform.saas}</p>
            <p className="mt-3 text-xs text-ink-soft/70">Typical spend</p>
            <p className="font-display text-xl text-red-300">{platform.saasCost}</p>
            <ul className="mt-3 space-y-1 text-xs text-ink-soft/70">
              <li>· Per-seat pricing that scales against them</li>
              <li>· Feature gates & vendor roadmaps</li>
              <li>· Data locked in someone else’s product</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <span className="rounded-full border border-signal/40 bg-signal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
              AI Transformation
            </span>
            <ArrowRight className="hidden h-5 w-5 text-signal sm:block" />
            <p className="text-center text-[10px] text-ink-soft/70 sm:max-w-[5.5rem]">
              Bridge: rebuild → own → improve
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-signal/10 p-4">
            <p className="text-[10px] uppercase tracking-wider text-signal/80">What we deliver</p>
            <p className="mt-2 font-display text-sm text-ink">{platform.rebuild}</p>
            <p className="mt-3 text-xs text-ink-soft/70">Model</p>
            <p className="font-display text-xl text-signal">{platform.rebuildCost}</p>
            <ul className="mt-3 space-y-1 text-xs text-emerald-100/80">
              {platform.upgrades.map((u) => (
                <li key={u} className="flex items-center gap-1.5">
                  <Check className="h-3 w-3 shrink-0 text-signal" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
        <p className="mb-3 text-[10px] uppercase tracking-wider text-ink-soft/70">
          How the reengineering run works
        </p>
        <div className="flex flex-wrap gap-2">
          {bridge.map((b, i) => (
            <div
              key={b.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition ${
                i === phase
                  ? 'border-signal/50 bg-signal/15 text-ink'
                  : i < phase
                    ? 'border-signal/30 text-signal'
                    : 'border-[var(--line)] text-ink-soft/70'
              }`}
            >
              <b.icon className="h-3.5 w-3.5" />
              {b.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-[var(--line)] bg-white/40 px-2 py-3">
          <p className="text-[10px] text-ink-soft/70">SaaS (high)</p>
          <p className="font-display text-sm text-red-300">${saasHigh}/mo</p>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-white/40 px-2 py-3">
          <p className="text-[10px] text-ink-soft/70">Rebuilt ops</p>
          <p className="font-display text-sm text-signal">${rebuilt}/mo</p>
        </div>
        <div className="rounded-xl border border-signal/30 bg-signal/10 px-2 py-3">
          <p className="text-[10px] text-signal/80">Illustrative save</p>
          <p className="font-display text-sm text-ink">
            <TrendingDown className="mr-0.5 inline h-3.5 w-3.5 text-signal" />$
            {yearlySave.toLocaleString()}/yr
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-ink-soft/70">
        CRM, booking, inventory, POS, industry platforms—almost anything they can name can be
        replicated, self-hosted, and improved. Figures are planning examples, not guarantees. We
        baseline their real stack in discovery, then bridge them off rent forever.
      </p>
    </div>
  )
}

function DiscoveryDemo() {
  const phases = [
    { title: 'Discover', items: ['Process map', 'Tool audit', 'Pain + ROI score'] },
    { title: 'Design', items: ['Agent scopes', 'Integrations', 'Success metrics'] },
    { title: 'Pilot', items: ['2–4 week build', 'Sandbox tests', 'Go / no-go'] },
    {
      title: 'Train & care',
      items: ['Team training', 'Maintenance retainer', 'Support retainer'],
    },
  ]
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % phases.length), PRODUCT_MOTION.stepMs)
    return () => clearInterval(t)
  }, [phases.length])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {phases.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: i === active ? 1.02 : 1,
            }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-2xl border p-4 ${
              i === active
                ? 'border-signal/45 bg-signal/15 shadow-[0_0_20px_rgba(15,143,117,0.15)]'
                : i < active
                  ? 'border-signal/25 bg-white/50'
                  : 'border-[var(--line)] bg-white/40'
            }`}
          >
            <p className="font-display text-sm text-signal">
              0{i + 1} · {p.title}
            </p>
            <ul className="mt-2 space-y-1">
              {p.items.map((item) => (
                <li key={item} className="text-xs text-ink-soft">
                  · {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-ink-soft">
        Implementation is not a dump-and-run: discovery → pilot →{' '}
        <strong className="text-ink">train your team on the tech</strong> → maintenance &amp; support
        retainers.
      </p>
    </div>
  )
}

function ContentAgentDemo() {
  const flow = [
    'Content calendar topic',
    'Grok drafts blog + social',
    'Stage on /blog',
    'Human approval',
    'Publish + schedule',
  ]
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % flow.length), PRODUCT_MOTION.stepMs)
    return () => clearInterval(t)
  }, [flow.length])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {flow.map((label, i) => (
          <motion.div
            key={label}
            animate={{
              opacity: i <= step ? 1 : 0.45,
              scale: i === step ? 1.01 : 1,
            }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm ${
              i === step
                ? 'border-signal/40 bg-signal/15 text-ink'
                : i < step
                  ? 'border-[var(--line)] text-ink-soft'
                  : 'border-transparent text-ink-soft/70'
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
              {i + 1}
            </span>
            {label}
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-ink-soft">
        We run this pipeline on AI Transformation first—then install it for clients. See the{' '}
        <Link href="/#social-ads" className="text-signal hover:underline">
          social content engine
        </Link>{' '}
        · live drafts on{' '}
        <Link href="/blog" className="text-signal hover:underline">
          Blog
        </Link>
        .
      </p>
    </div>
  )
}

function DemoPanel({ id }: { id: DemoId }) {
  switch (id) {
    case 'ops':
      return <OpsSavingsDemo />
    case 'agents':
      return <AgentDemo />
    case 'marketing':
      return <MarketingDemo />
    case 'website':
      return <CustomSoftwareDemo />
  }
}

export default function AutomationShowcase() {
  const [active, setActive] = useState<DemoId>('ops')
  const current = demos.find((d) => d.id === active)!

  const selectDemo = (demoId: string) => {
    if (demos.some((d) => d.id === demoId)) {
      setActive(demoId as DemoId)
      window.requestAnimationFrame(() => {
        document.getElementById('demo-stage')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      })
    }
  }

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="demos" glow="center" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Interactive demos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            See how the pieces connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Four live walkthroughs—one per product line. Pick a tab to see how it works.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <ValueFlow onSelectDemo={selectDemo} />
        </motion.div>

        <div id="demo-stage" className="relative z-20 scroll-mt-28">
          <div
            role="tablist"
            aria-label="Automation demos"
            className="mb-5 flex flex-wrap gap-2"
          >
            {demos.map((demo) => {
              const Icon = demo.icon
              const isActive = demo.id === active
              return (
                <button
                  key={demo.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`demo-tab-${demo.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setActive(demo.id)
                  }}
                  className={`relative z-20 flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-signal/50 bg-signal/15 text-ink shadow-[0_0_24px_rgba(15,143,117,0.25)]'
                      : 'border-[var(--line)] bg-white/55 text-ink-soft hover:border-signal/40 hover:text-ink'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {demo.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            aria-labelledby={`demo-tab-${active}`}
            className="glass-panel relative z-10 rounded-3xl p-5 sm:p-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              >
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-ink-soft">{current.blurb}</p>
                  </div>
                  <button type="button" onClick={scrollToBooking} className="cta-pill shrink-0 text-sm">
                    Talk through this
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                <DemoPanel id={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollSlide>
  )
}
