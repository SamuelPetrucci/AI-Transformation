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
    label: 'Websites',
    icon: Globe,
    title: 'Design · Host · Deliver',
    blurb: 'From brief to live site: design, build, host, and hand off with monitoring included.',
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
    title: 'Standing up your first agent',
    blurb: 'Connect tools, define guardrails, test workflows, then go live with monitoring.',
  },
  {
    id: 'marketing',
    label: 'Auto marketing',
    icon: Mail,
    title: 'Automated marketing',
    blurb: 'Content calendar, captions, scheduling, and nurture sequences—run by AI with your approval gates.',
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
    label: 'Discovery',
    icon: Search,
    title: 'Discovery → Implementation',
    blurb: 'Map processes, score ROI, pilot fast, then scale what works.',
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
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-violet-300">
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
                  ? 'border-violet-400/40 bg-violet-500/15'
                  : i < active
                    ? 'border-white/10 bg-white/[0.03]'
                    : 'border-transparent bg-transparent'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  i <= active ? 'bg-violet-500 text-white' : 'bg-white/10 text-zinc-500'
                }`}
              >
                {i < active ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-white">{s.label}</p>
                <p className="text-xs text-zinc-400">{s.detail}</p>
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
          <div key={m.k} className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-3">
            <p className="text-zinc-500">{m.k}</p>
            <p className="mt-1 font-display text-sm text-violet-300">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function WebsiteDemo() {
  const stages = [
    { icon: Search, title: 'Brief', desc: 'Goals, brand, pages' },
    { icon: Workflow, title: 'Design', desc: 'Theme + UX' },
    { icon: Globe, title: 'Build', desc: 'Next.js delivery' },
    { icon: Server, title: 'Host', desc: 'Vercel + SSL' },
    { icon: Check, title: 'Deliver', desc: 'Handoff + docs' },
  ]
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % stages.length), 1600)
    return () => clearInterval(t)
  }, [stages.length])

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f0a1a] to-[#050505] p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs text-zinc-500">preview.yourbrand.com</span>
        </div>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="h-3 w-1/3 rounded bg-violet-400/40" />
          <div className="h-8 w-2/3 rounded bg-white/15" />
          <div className="h-2 w-full rounded bg-white/8" />
          <div className="h-2 w-5/6 rounded bg-white/8" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-lg bg-cyan-400/15" />
            <div className="h-14 rounded-lg bg-violet-400/20" />
            <div className="h-14 rounded-lg bg-white/8" />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-2">
        {stages.map((s, i) => (
          <div
            key={s.title}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
              i === step
                ? 'border-violet-400/50 bg-violet-500/20 text-white'
                : i < step
                  ? 'border-emerald-400/30 text-emerald-300'
                  : 'border-white/10 text-zinc-500'
            }`}
          >
            <s.icon className="h-3.5 w-3.5" />
            {s.title}
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-400">
        Simple services, done right: design, hosting, and delivery with clear milestones—so you go live
        without the agency bloat.
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
          <div key={m.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-500">{m.label}</p>
            <p className="mt-1 font-display text-2xl text-white">{m.value}</p>
            <p className="mt-1 text-xs text-emerald-400">{m.delta}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel rounded-2xl p-4">
        <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">Campaign pipeline</p>
        <div className="space-y-2 text-sm">
          {[
            'Creative variants generated (AI-assisted)',
            'Audience tests running on Meta',
            'Leads synced to CRM + follow-up agent',
          ].map((line) => (
            <div key={line} className="flex items-center gap-2 text-zinc-300">
              <Check className="h-4 w-4 text-violet-400" />
              {line}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-zinc-400">
        Pairs with Facebook Ads + Social ($499/mo). You pay ad spend separately—we manage creative,
        targeting, and reporting.
      </p>
    </div>
  )
}

function AgentSetupDemo() {
  const checklist = [
    { label: 'Connect CRM + calendar', done: true },
    { label: 'Define intents & guardrails', done: true },
    { label: 'Knowledge base ingest', done: true },
    { label: 'Sandbox test (12 scenarios)', done: false },
    { label: 'Go-live + monitoring', done: false },
  ]
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1400)
    return () => clearInterval(t)
  }, [])
  const progress = Math.min(100, 55 + (tick % 5) * 9)

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <div className="mb-2 flex justify-between text-xs text-zinc-400">
          <span>Setup progress</span>
          <span className="text-violet-300">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <ul className="space-y-2">
        {checklist.map((item, i) => {
          const done = item.done || i < Math.floor(progress / 25)
          return (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-white/8 px-3 py-2.5 text-sm"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                  done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-zinc-500'
                }`}
              >
                {done ? <Check className="h-3 w-3" /> : <Settings2 className="h-3 w-3" />}
              </span>
              <span className={done ? 'text-zinc-200' : 'text-zinc-500'}>{item.label}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function MarketingDemo() {
  const posts = [
    { day: 'Mon', status: 'Scheduled', channel: 'IG' },
    { day: 'Wed', status: 'Scheduled', channel: 'FB' },
    { day: 'Fri', status: 'Draft', channel: 'IG + FB' },
    { day: 'Sun', status: 'Queued', channel: 'FB' },
  ]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {posts.map((p) => (
          <div key={p.day} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-center">
            <p className="text-xs text-zinc-500">{p.day}</p>
            <p className="mt-1 font-display text-sm text-white">{p.channel}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-violet-300">{p.status}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel space-y-2 rounded-2xl p-4 text-sm text-zinc-300">
        <div className="flex items-center gap-2 text-violet-300">
          <Calendar className="h-4 w-4" />
          Monthly content calendar
        </div>
        <p>AI drafts captions + graphics → you approve → we schedule to Facebook & Instagram.</p>
        <div className="flex items-center gap-2 pt-1 text-violet-300">
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
      <p className="text-sm text-zinc-400">
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
                ? 'border-violet-400/50 bg-violet-500/20 text-white'
                : 'border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
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
            <p className="mt-2 font-display text-sm text-white">{platform.saas}</p>
            <p className="mt-3 text-xs text-zinc-500">Typical spend</p>
            <p className="font-display text-xl text-red-300">{platform.saasCost}</p>
            <ul className="mt-3 space-y-1 text-xs text-zinc-500">
              <li>· Per-seat pricing that scales against them</li>
              <li>· Feature gates & vendor roadmaps</li>
              <li>· Data locked in someone else’s product</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <span className="rounded-full border border-violet-400/40 bg-violet-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
              AI Transformation
            </span>
            <ArrowRight className="hidden h-5 w-5 text-violet-400 sm:block" />
            <p className="text-center text-[10px] text-zinc-500 sm:max-w-[5.5rem]">
              Bridge: rebuild → own → improve
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4">
            <p className="text-[10px] uppercase tracking-wider text-emerald-300/80">What we deliver</p>
            <p className="mt-2 font-display text-sm text-white">{platform.rebuild}</p>
            <p className="mt-3 text-xs text-zinc-500">Model</p>
            <p className="font-display text-xl text-emerald-300">{platform.rebuildCost}</p>
            <ul className="mt-3 space-y-1 text-xs text-emerald-100/80">
              {platform.upgrades.map((u) => (
                <li key={u} className="flex items-center gap-1.5">
                  <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <p className="mb-3 text-[10px] uppercase tracking-wider text-zinc-500">
          How the reengineering run works
        </p>
        <div className="flex flex-wrap gap-2">
          {bridge.map((b, i) => (
            <div
              key={b.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition ${
                i === phase
                  ? 'border-violet-400/50 bg-violet-500/20 text-white'
                  : i < phase
                    ? 'border-emerald-400/30 text-emerald-300'
                    : 'border-white/10 text-zinc-500'
              }`}
            >
              <b.icon className="h-3.5 w-3.5" />
              {b.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-3">
          <p className="text-[10px] text-zinc-500">SaaS (high)</p>
          <p className="font-display text-sm text-red-300">${saasHigh}/mo</p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-3">
          <p className="text-[10px] text-zinc-500">Rebuilt ops</p>
          <p className="font-display text-sm text-emerald-300">${rebuilt}/mo</p>
        </div>
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-2 py-3">
          <p className="text-[10px] text-emerald-300/80">Illustrative save</p>
          <p className="font-display text-sm text-white">
            <TrendingDown className="mr-0.5 inline h-3.5 w-3.5 text-emerald-400" />$
            {yearlySave.toLocaleString()}/yr
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-zinc-500">
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
    { title: 'Scale', items: ['Production', 'Training', 'Ongoing optimize'] },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      {phases.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
        >
          <p className="font-display text-sm text-violet-300">
            0{i + 1} · {p.title}
          </p>
          <ul className="mt-2 space-y-1">
            {p.items.map((item) => (
              <li key={item} className="text-xs text-zinc-400">
                · {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
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
                ? 'border-violet-400/40 bg-violet-500/15 text-white'
                : i < step
                  ? 'border-white/10 text-zinc-300'
                  : 'border-transparent text-zinc-500'
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
              {i + 1}
            </span>
            {label}
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-400">
        We run this pipeline on AI Transformation first—then install it for clients. Full steps on{' '}
        <Link href="/agents" className="text-violet-300 hover:underline">
          Agent Ops
        </Link>{' '}
        · live drafts on{' '}
        <Link href="/blog" className="text-violet-300 hover:underline">
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

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="demos" glow="center" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
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
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            See how agents & automation work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            Click through live-style demos: agents, websites, ads, marketing automation, ops savings,
            and discovery-to-implementation.
          </motion.p>
        </div>

        <div className="relative z-20">
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
                      ? 'border-violet-400/50 bg-violet-500/20 text-white shadow-[0_0_24px_rgba(139,92,246,0.25)]'
                      : 'border-white/10 bg-[#0a0a0c] text-zinc-400 hover:border-white/20 hover:text-white'
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
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-zinc-400">{current.blurb}</p>
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
