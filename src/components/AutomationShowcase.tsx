'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Bot,
  Megaphone,
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
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'
import { openCalendlyPopup } from '@/lib/calendly-popup'

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
    title: 'Own your tech stack. Reduce costs. Take control of your business data.',
    blurb:
      'We rebuild the CRM, booking tool, or platform you rent today into software you own—self-hosted, improved, and integrated. It may not always cost a fraction of SaaS; we work to reduce software cost and assess ROI before we deliver.',
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
    title: 'Content engine with human approval',
    blurb:
      'Train the agent, draft for the platforms you use, approve every piece, then schedule and optionally advertise.',
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

function CustomSoftwareDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-soft">
        Problem: another SaaS seat tax for every tool. Solution: purpose-built apps nested into
        your operations—you own the code.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {customApps.map((app) => {
          const Icon = app.icon
          return (
            <div
              key={app.id}
              className="rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/15 text-signal">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-display text-sm font-semibold text-ink">{app.label}</p>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{app.idea}</p>
            </div>
          )
        })}
      </div>
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
        It may not always be a fraction of what you pay today—but we work to reduce software cost and
        assess ROI on the rebuild before we deliver.
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
        baseline the real stack in discovery and size ROI before we build.
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

  const scrollToBooking = () => {
    void openCalendlyPopup()
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
            Concept Demos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            See how the work runs
          </motion.h2>
        </div>

        <div id="demo-stage" className="relative z-20 scroll-mt-28">
          <div
            role="tablist"
            aria-label="Concept Demos"
            className="mb-5 flex w-full gap-0 overflow-x-auto border-b border-[var(--line)]"
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
                  className={`relative z-20 flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors duration-200 sm:px-5 ${
                    isActive
                      ? 'border-signal text-ink'
                      : 'border-transparent text-ink-soft hover:border-signal/30 hover:text-ink'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-signal' : ''}`} />
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
