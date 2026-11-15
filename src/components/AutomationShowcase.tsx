'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Bot,
  Globe,
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

type DemoId =
  | 'agents'
  | 'website'
  | 'ads'
  | 'agent-setup'
  | 'marketing'
  | 'ops'
  | 'discovery'
  | 'content'

const demos: {
  id: DemoId
  label: string
  icon: typeof Bot
  title: string
  blurb: string
}[] = [
  {
    id: 'agents',
    label: 'AI Agents',
    icon: Bot,
    title: 'How agents work',
    blurb: 'Watch an agent triage a lead, pull context, and hand off a booked call—without a human in the loop.',
  },
  {
    id: 'website',
    label: 'Build & Implement',
    icon: Globe,
    title: 'Custom software, agent implementation & staff training',
    blurb:
      'Websites and ops software to organize the business—then AI agent implementation and staff AI training so lead capture, booking, and day-to-day workflows actually stick.',
  },
  {
    id: 'ads',
    label: 'Advertising',
    icon: Megaphone,
    title: 'Paid ads that feed pipeline',
    blurb: 'Campaign setup, creative variants, and lead tracking—paired with your social packages.',
  },
  {
    id: 'agent-setup',
    label: 'Agent setup',
    icon: Settings2,
    title: 'Agent creation & training',
    blurb:
      'Connect tools, define guardrails, test workflows, train your team, then go live with monitoring.',
  },
  {
    id: 'marketing',
    label: 'Social automation',
    icon: Mail,
    title: 'Social media automation',
    blurb:
      'Train the agent, draft for any platforms you use, human-approve every piece, then schedule and advertise—checks and balances built in.',
  },
  {
    id: 'ops',
    label: 'Save on tech',
    icon: PiggyBank,
    title: 'Rebuild their stack. Own it. Pay less.',
    blurb:
      'We replicate the CRM, booking tool, or platform they already use—self-host it, improve it, add integrations, and deliver it at a fraction of SaaS cost. We’re the bridge.',
  },
  {
    id: 'discovery',
    label: 'Train & implement',
    icon: Search,
    title: 'Training & implementation',
    blurb:
      'Map processes, score ROI, pilot fast, train the team, then scale what works—so the system sticks.',
  },
  {
    id: 'content',
    label: 'Content agent',
    icon: Sparkles,
    title: 'Daily Grok blog + social agent',
    blurb:
      'We orchestrate a Grok content agent on ourselves—draft blog, social hooks, human approve, publish. Lead by example.',
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
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800)
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

function WebsiteDemo() {
  const stages = [
    { icon: Search, title: 'Brief', desc: 'Goals, ops map, pages, and agent scopes' },
    {
      icon: Globe,
      title: 'Custom software',
      desc: 'Sites, CRMs, booking tools, and ops hubs you own',
    },
    {
      icon: Bot,
      title: 'Agent implementation',
      desc: 'Lead, booking, and follow-up agents wired to your stack',
    },
    {
      icon: Users,
      title: 'Staff AI training',
      desc: 'Live sessions and playbooks so your team can run it',
    },
    {
      icon: Server,
      title: 'Operate',
      desc: 'Host, monitor, and iterate with your team',
    },
  ]
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % stages.length), 1800)
    return () => clearInterval(t)
  }, [stages.length])

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br from-paper-2 to-white p-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs text-ink-soft/70">ops.yourbrand.com</span>
          </div>
          <span className="rounded-full bg-signal/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal">
            {stages[step].title}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <motion.div
            key={`soft-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`space-y-3 rounded-xl border p-4 ${
              step >= 1 ? 'border-signal/40 bg-signal/10' : 'border-[var(--line)] bg-white/50'
            }`}
          >
            <p className="text-[10px] uppercase tracking-wider text-ink-soft/70">Custom software</p>
            <div className="h-3 w-1/3 rounded bg-signal/40" />
            <div className="h-8 w-2/3 rounded bg-ink/10" />
            <div className="h-2 w-full rounded bg-ink/5" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-signal/15" />
              <div className="h-10 rounded-lg bg-ink/5" />
            </div>
          </motion.div>

          <motion.div
            key={`agent-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className={`space-y-2 rounded-xl border p-4 ${
              step >= 2 ? 'border-signal/40 bg-signal/10' : 'border-[var(--line)] bg-white/40'
            }`}
          >
            <p className="text-[10px] uppercase tracking-wider text-ink-soft/70">
              Agent implementation
            </p>
            {['Lead triage', 'Book + SMS', 'CRM sync'].map((line, i) => (
              <div
                key={line}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  step >= 2 + Math.min(i, 1)
                    ? 'bg-signal/15 text-ink'
                    : 'bg-white/50 text-ink-soft/70'
                }`}
              >
                <Bot className="h-3.5 w-3.5 text-signal" />
                {line}
              </div>
            ))}
          </motion.div>

          <motion.div
            key={`train-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={`space-y-2 rounded-xl border p-4 ${
              step >= 3 ? 'border-signal/40 bg-signal/10' : 'border-[var(--line)] bg-white/40'
            }`}
          >
            <p className="text-[10px] uppercase tracking-wider text-ink-soft/70">Staff AI training</p>
            {['Live walkthrough', 'Playbooks', 'Owner handoff'].map((line, i) => (
              <div
                key={line}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  step >= 3
                    ? 'bg-signal/15 text-ink'
                    : 'bg-white/50 text-ink-soft/70'
                }`}
              >
                <Users className="h-3.5 w-3.5 text-signal" />
                {line}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stages.map((s, i) => (
          <div
            key={s.title}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
              i === step
                ? 'border-signal/50 bg-signal/15 text-ink'
                : i < step
                  ? 'border-signal/30 text-signal'
                  : 'border-[var(--line)] text-ink-soft/70'
            }`}
          >
            <s.icon className="h-3.5 w-3.5" />
            {s.title}
          </div>
        ))}
      </div>
      <p className="text-sm text-ink-soft">
        <span className="font-medium text-ink">{stages[step].title}:</span> {stages[step].desc}. We
        build the software, implement the agents, and train your staff—so operations stay organized.
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
    const t = setInterval(() => setStep((s) => (s + 1) % stages.length), 1600)
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
            transition={{ duration: 0.5 }}
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
    const t = setInterval(() => setPhase((p) => (p + 1) % bridge.length), 1600)
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
          transition={{ duration: 0.3 }}
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
    { title: 'Train & scale', items: ['Team training', 'Production', 'Ongoing optimize'] },
  ]
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % phases.length), 1800)
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
        Implementation is not a dump-and-run: discovery → pilot → <strong className="text-ink">train your team</strong> →
        scale what works.
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
    const t = setInterval(() => setStep((s) => (s + 1) % flow.length), 1500)
    return () => clearInterval(t)
  }, [flow.length])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {flow.map((label, i) => (
          <div
            key={label}
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
          </div>
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
    case 'agents':
      return <AgentDemo />
    case 'website':
      return <WebsiteDemo />
    case 'ads':
      return <AdsDemo />
    case 'agent-setup':
      return <AgentSetupDemo />
    case 'marketing':
      return <MarketingDemo />
    case 'ops':
      return <OpsSavingsDemo />
    case 'discovery':
      return <DiscoveryDemo />
    case 'content':
      return <ContentAgentDemo />
  }
}

export default function AutomationShowcase() {
  const [active, setActive] = useState<DemoId>('agents')
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
            Trace friction through our three pillars into outcomes—then open a live diagram of agents,
            web builds, social automation, ads, and ops rebuilds.
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
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
