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
  Check,
  Sparkles,
  Server,
  Calendar,
  MessageSquare,
  TrendingDown,
  Workflow,
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
    title: 'Reengineer ops & cut spend',
    blurb: 'Replace brittle stacks and manual work with leaner automations that save money every year.',
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
  const savings = [
    { item: 'Consolidate SaaS tools', yearly: '$4,800' },
    { item: 'Automate intake / booking', yearly: '$9,600' },
    { item: 'Replace manual reporting', yearly: '$3,200' },
    { item: 'Reduce after-hours coverage', yearly: '$7,100' },
  ]
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-emerald-300/80">Illustrative annual savings</p>
        <p className="mt-1 font-display text-4xl font-semibold text-white">$24,700</p>
        <p className="mt-2 flex items-center justify-center gap-1 text-sm text-emerald-300">
          <TrendingDown className="h-4 w-4" />
          Lower tech + labor spend after reengineering
        </p>
      </div>
      <ul className="space-y-2">
        {savings.map((s) => (
          <li
            key={s.item}
            className="flex items-center justify-between rounded-xl border border-white/8 px-3 py-2.5 text-sm"
          >
            <span className="text-zinc-300">{s.item}</span>
            <span className="font-medium text-emerald-300">{s.yearly}/yr</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-zinc-500">
        Figures are examples for planning conversations—not guarantees. We baseline your stack in
        discovery, then target the highest-ROI automations first.
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
