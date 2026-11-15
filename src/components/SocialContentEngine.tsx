'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Check,
  Play,
  MessageSquare,
  Bot,
  GraduationCap,
  Search,
  Rocket,
  Users,
  Code2,
  Plug,
  ShieldCheck,
  Pause,
  Database,
  PenLine,
  CalendarClock,
  Package,
} from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { CONTACT_CONFIG, getSmsConsultHref } from '@/config/contact'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'
import { PLATFORMS } from '@/components/PlatformLogos'

type CapabilityId = 'web-agents' | 'training' | 'social'

const capabilities: {
  id: CapabilityId
  label: string
  overline: string
  headline: string
  highlight: string
  blurb: string
  steps: { id: string; label: string; detail: string; icon: typeof Sparkles }[]
}[] = [
  {
    id: 'web-agents',
    label: 'Build & Implement',
    overline: 'Web, AI agents, ops software & staff training',
    headline: 'We build the systems.',
    highlight: 'AI agents. Train your team.',
    blurb:
      'Custom websites and operation software—plus AI agents we fine-tune and train to carry out repetitive, error-prone tasks for your review, with staff training so your team stays in control.',
    steps: [
      { id: 'brief', label: 'Brief', detail: 'Goals, ops map, agent scopes', icon: Search },
      {
        id: 'software',
        label: 'Custom software',
        detail: 'Sites, CRMs, booking, custom ops software',
        icon: Code2,
      },
      {
        id: 'agents',
        label: 'AI agents',
        detail: 'Fine-tuned for repetitive tasks, queued for review',
        icon: Bot,
      },
      {
        id: 'train',
        label: 'Staff AI training',
        detail: 'Playbooks, live sessions, handoff',
        icon: GraduationCap,
      },
      { id: 'live', label: 'Operate', detail: 'Host, monitor, iterate with you', icon: Rocket },
    ],
  },
  {
    id: 'training',
    label: 'Train & Implement',
    overline: 'Efficiency audit → AI agents → staff training',
    headline: 'We implement it.',
    highlight: 'Then we train your staff.',
    blurb:
      'Start with an efficiency audit, fine-tune AI agents for the repetitive work, queue outputs for your review, then train your staff—discovery → pilot → production so the team owns the workflows.',
    steps: [
      { id: 'discover', label: 'Audit', detail: 'Efficiency opportunities mapped', icon: Search },
      { id: 'design', label: 'Design', detail: 'Cron + trigger scopes', icon: Plug },
      { id: 'pilot', label: 'Pilot', detail: '2–4 week sandbox build', icon: Sparkles },
      { id: 'train', label: 'Train staff', detail: 'AI playbooks + live sessions', icon: GraduationCap },
      { id: 'scale', label: 'Scale', detail: 'Production + ongoing optimize', icon: ShieldCheck },
    ],
  },
  {
    id: 'social',
    label: 'Content & Ads',
    overline: 'Content engines across the platforms you already use',
    headline: 'We build content engines.',
    highlight: 'Your data → AI drafts → you approve → scheduled everywhere.',
    blurb:
      'We train on your product, company data, and brand—then AI generates scripts and creatives. You iterate and approve. We schedule so your branding shows up consistently across Instagram, Facebook, LinkedIn, X, TikTok, YouTube, and more.',
    steps: [
      {
        id: 'data',
        label: 'Your data',
        detail: 'Products, brand, logos, voice, offers',
        icon: Database,
      },
      {
        id: 'idea',
        label: 'AI script idea',
        detail: 'Hooks and outlines trained on your business',
        icon: Sparkles,
      },
      {
        id: 'create',
        label: 'Create content',
        detail: 'Platform-native drafts and ad creatives',
        icon: PenLine,
      },
      {
        id: 'approve',
        label: 'Iterate & approve',
        detail: 'Human gate—nothing ships without a yes',
        icon: ShieldCheck,
      },
      {
        id: 'schedule',
        label: 'Schedule & distribute',
        detail: 'Consistent branding across every channel',
        icon: CalendarClock,
      },
    ],
  },
]

/** Fake product-company creatives for the multi-platform demo */
const DEMO_BRAND = {
  name: 'Aether Goods',
  product: 'Trail Flask Pro',
  tagline: 'Hydration that lasts the ridge',
}

const PLATFORM_POSTS = [
  {
    platformId: 'instagram' as const,
    format: 'Feed + Stories',
    headline: 'Ridge-ready in one pour',
    body: 'Trail Flask Pro · double-wall · 24hr cold. New colorways in the shop.',
    cta: 'Shop the drop',
  },
  {
    platformId: 'facebook' as const,
    format: 'Ad creative',
    headline: 'Weekend kit, sorted',
    body: 'Aether Goods customers save 15% this week—Flask Pro + sling pack.',
    cta: 'Claim offer',
  },
  {
    platformId: 'linkedin' as const,
    format: 'Brand post',
    headline: 'Built for crews who move',
    body: 'How Aether Goods ships consistent product stories without a full-time studio.',
    cta: 'Read more',
  },
  {
    platformId: 'tiktok' as const,
    format: 'Short',
    headline: 'Hook: “One bottle. Whole trail.”',
    body: '15s product demo · on-brand VO · end card with offer.',
    cta: 'Watch cut',
  },
  {
    platformId: 'youtube' as const,
    format: 'Shorts',
    headline: 'Trail Flask Pro — 30s',
    body: 'Feature reel from your product shots + approved script.',
    cta: 'Publish Short',
  },
  {
    platformId: 'x' as const,
    format: 'Post',
    headline: 'Cold for 24 hrs. Looks good on the desk too.',
    body: 'Aether Goods · Trail Flask Pro · link in bio energy, without the chaos.',
    cta: 'Learn more',
  },
]

function WebAgentsDiagram({ step }: { step: number }) {
  const nodes = [
    { label: 'Custom software', icon: Code2, x: '14%', y: '24%' },
    { label: 'AI agents', icon: Bot, x: '50%', y: '22%' },
    { label: 'Staff training', icon: GraduationCap, x: '86%', y: '28%' },
    { label: 'Custom ops software', icon: Plug, x: '28%', y: '72%' },
    { label: 'Your team', icon: Users, x: '72%', y: '74%' },
  ]
  const active = Math.min(step, nodes.length - 1)

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
          Build · implement · train
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
          Connecting
        </span>
      </div>

      <div className="relative h-[280px] rounded-2xl border border-white/10 bg-gradient-to-br from-signal/10 to-ember/5">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <motion.path
            d="M 55 70 L 180 65 L 310 80 L 100 200 L 260 210"
            fill="none"
            stroke="rgba(24,184,148,0.45)"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: Math.min(1, (step + 1) / 5) }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
          />
        </svg>

        {nodes.map((n, i) => {
          const Icon = n.icon
          const isOn = i <= active
          return (
            <motion.div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: n.x, top: n.y }}
              animate={{
                scale: i === active ? 1.06 : 1,
                opacity: isOn ? 1 : 0.4,
              }}
            >
              <div
                className={`flex w-[7.75rem] flex-col items-center gap-2 rounded-2xl border px-3 py-3 text-center ${
                  i === active
                    ? 'border-signal/60 bg-signal/20 shadow-[0_0_24px_rgba(15,143,117,0.35)]'
                    : isOn
                      ? 'border-white/20 bg-white/10'
                      : 'border-white/10 bg-black/20'
                }`}
              >
                <Icon className={`h-5 w-5 ${i === active ? 'text-signal-bright' : 'text-paper/80'}`} />
                <p className="text-xs font-semibold text-paper">{n.label}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <p className="mt-3 text-xs text-paper/70">
        Ops software + agent implementation + staff AI training—systems your team can run.
      </p>
    </div>
  )
}

function TrainingDiagram({ step }: { step: number }) {
  const phases = [
    { title: 'Discover', items: ['Process map', 'Tool audit'] },
    { title: 'Design', items: ['Agent scopes', 'Success metrics'] },
    { title: 'Pilot', items: ['Sandbox build', 'Go / no-go'] },
    { title: 'Train staff', items: ['AI sessions', 'Playbooks'] },
    { title: 'Scale', items: ['Production', 'Optimize'] },
  ]

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
          Implementation runway
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <GraduationCap className="h-3 w-3" />
          Training included
        </span>
      </div>

      <div className="space-y-2">
        {phases.map((p, i) => {
          const activeIndex = step % phases.length
          const isActive = i === activeIndex
          const isDone = i < activeIndex
          return (
            <motion.div
              key={p.title}
              animate={{
                opacity: i <= activeIndex ? 1 : 0.4,
                x: isActive ? 4 : 0,
              }}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                isActive
                  ? 'border-signal/50 bg-signal/20'
                  : isDone
                    ? 'border-white/15 bg-white/5'
                    : 'border-white/10 bg-transparent'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isDone
                    ? 'bg-signal text-paper'
                    : isActive
                      ? 'bg-signal-bright text-ink'
                      : 'bg-white/10 text-paper/60'
                }`}
              >
                {isDone ? <Check className="h-3.5 w-3.5" /> : `0${i + 1}`}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-paper">{p.title}</p>
                <p className="truncate text-xs text-paper/65">{p.items.join(' · ')}</p>
              </div>
              {p.title === 'Train' && (isActive || isDone) && (
                <Users className="h-4 w-4 shrink-0 text-signal-bright" />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function PipelineStage({ step }: { step: number }) {
  const phase = Math.min(step, 4)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={phase}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4"
      >
        {phase === 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/25 text-signal-bright">
                <Package className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-paper">{DEMO_BRAND.name}</p>
                <p className="text-[11px] text-paper/65">Product · brand kit · company data</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Logo', 'Product shots', 'Voice'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-black/25 px-2 py-3 text-center"
                >
                  <Database className="mx-auto mb-1 h-3.5 w-3.5 text-signal-bright" />
                  <p className="text-[10px] font-medium text-paper/80">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-paper/75">
              Ingest {DEMO_BRAND.product}, offers, and brand rules so every draft sounds like you.
            </p>
          </div>
        )}

        {phase === 1 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-signal-bright">
              <Sparkles className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">AI script idea</p>
            </div>
            <div className="rounded-xl border border-signal/30 bg-signal/10 p-3">
              <p className="font-mono text-[10px] text-signal-bright/80">HOOK</p>
              <p className="mt-1 font-display text-base text-paper">
                “One bottle. Whole trail.”
              </p>
              <p className="mt-2 text-xs leading-relaxed text-paper/75">
                Angle: product proof → lifestyle payoff → soft CTA. SEO phrases: trail flask, all-day
                cold, weekend kit.
              </p>
            </div>
            <p className="text-[11px] text-paper/60">Generated from your data—not a generic template.</p>
          </div>
        )}

        {phase === 2 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-signal-bright">
              <PenLine className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">Creating content</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ember/35 to-signal/25">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 p-4 text-center">
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: PRODUCT_MOTION.pulse, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-2xl border border-white/20 bg-black/25 px-4 py-3"
                >
                  <p className="font-display text-lg text-paper">{DEMO_BRAND.product}</p>
                  <p className="text-xs text-paper/75">{DEMO_BRAND.tagline}</p>
                </motion.div>
                <p className="text-[10px] uppercase tracking-wider text-paper/60">
                  Draft creative · platform-native cuts
                </p>
              </div>
            </div>
          </div>
        )}

        {phase === 3 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-signal-bright">
                <ShieldCheck className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-wider">Iterate & approve</p>
              </div>
              <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                Needs review
              </span>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-3">
              <p className="text-sm text-paper">Caption v2 — punchier CTA, keep product name.</p>
              <p className="mt-2 text-xs text-paper/65">
                You tweak tone → engine revises → human yes before anything goes live.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-paper/70">
                Request edit
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-signal px-3 py-1.5 text-[11px] font-semibold text-paper">
                <Check className="h-3 w-3" /> Approve
              </span>
            </div>
          </div>
        )}

        {phase === 4 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-signal-bright">
              <CalendarClock className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">Schedule & distribute</p>
            </div>
            <div className="rounded-xl border border-signal/35 bg-signal/15 px-3 py-2.5">
              <p className="text-sm font-semibold text-paper">Calendar locked · Tue–Fri cadence</p>
              <p className="mt-1 text-xs text-paper/70">
                Same brand story, native formats—consistent presence without a full-time studio.
              </p>
            </div>
            <p className="text-[11px] text-paper/60">
              Fake posts below light up as the engine ships across platforms.
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

function SocialDiagram({
  step,
  post,
  stepLabel,
}: {
  step: number
  post: number
  stepLabel: string
}) {
  const pipeline = ['Data', 'Idea', 'Create', 'Approve', 'Schedule']
  const activePhase = Math.min(step, pipeline.length - 1)
  const distribute = activePhase >= 4
  const featured = PLATFORM_POSTS[post % PLATFORM_POSTS.length]
  const featuredMeta = PLATFORMS.find((p) => p.id === featured.platformId)!
  const FeaturedLogo = featuredMeta.Logo

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] shadow-[0_0_60px_rgba(15,143,117,0.18)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
          Content engine · {DEMO_BRAND.name}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
          {stepLabel}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {pipeline.map((label, i) => (
            <div
              key={label}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide ${
                i === activePhase
                  ? 'bg-signal text-paper'
                  : i < activePhase
                    ? 'bg-signal/25 text-signal-bright'
                    : 'bg-white/5 text-paper/45'
              }`}
            >
              {i < activePhase ? '✓ ' : ''}
              {label}
            </div>
          ))}
        </div>

        <PipelineStage step={step} />

        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-paper/60">
              Platforms
            </p>
            <p className="text-[10px] text-paper/50">
              {distribute ? 'Distributing…' : 'Waiting on schedule'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((platform, i) => {
              const Logo = platform.Logo
              const lit = distribute && i <= post % PLATFORMS.length
              return (
                <motion.div
                  key={platform.id}
                  animate={{
                    opacity: lit || !distribute ? 1 : 0.35,
                    scale: lit ? 1.06 : 1,
                    y: lit ? -2 : 0,
                  }}
                  transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    lit
                      ? 'border-white/30 bg-white text-ink shadow-[0_0_16px_rgba(15,143,117,0.35)]'
                      : 'border-white/10 bg-white/5 text-paper/70'
                  }`}
                  style={lit ? { color: platform.color } : undefined}
                  title={platform.name}
                >
                  <Logo className="h-4 w-4" />
                </motion.div>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${featured.platformId}-${post}-${distribute}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: distribute ? 1 : 0.55, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3"
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white"
                style={{ color: featuredMeta.color }}
              >
                <FeaturedLogo className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-paper">{featuredMeta.name}</p>
                <p className="text-[10px] text-paper/55">{featured.format}</p>
              </div>
              <span className="ml-auto rounded-full bg-signal/20 px-2 py-0.5 text-[10px] font-semibold text-signal-bright">
                {distribute ? 'Scheduled' : 'Draft'}
              </span>
            </div>
            <p className="font-display text-sm text-paper">{featured.headline}</p>
            <p className="mt-1 text-xs leading-relaxed text-paper/70">{featured.body}</p>
            <p className="mt-2 text-[11px] font-semibold text-signal-bright">{featured.cta} →</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function SocialContentEngine() {
  const [capability, setCapability] = useState<CapabilityId>('web-agents')
  const [step, setStep] = useState(0)
  const [post, setPost] = useState(0)
  const [running, setRunning] = useState(true)
  const [touring, setTouring] = useState(false)

  const current = capabilities.find((c) => c.id === capability)!
  const stepCount = current.steps.length

  useEffect(() => {
    setStep(0)
  }, [capability])

  useEffect(() => {
    if (!running || touring) return
    const t = setInterval(() => {
      setStep((s) => (s + 1) % stepCount)
    }, PRODUCT_MOTION.stepMs)
    return () => clearInterval(t)
  }, [running, touring, stepCount])

  useEffect(() => {
    if (!running || touring || capability !== 'social' || step < 4) return
    const t = setInterval(() => {
      setPost((p) => (p + 1) % PLATFORM_POSTS.length)
    }, PRODUCT_MOTION.rotateMs)
    return () => clearInterval(t)
  }, [running, touring, capability, step])

  const runOneClickDemo = () => {
    setRunning(false)
    setTouring(true)
    setCapability('web-agents')
    setStep(0)
    setPost(0)

    const sequence: { cap: CapabilityId; steps: number }[] = [
      { cap: 'web-agents', steps: 5 },
      { cap: 'training', steps: 5 },
      { cap: 'social', steps: 5 },
    ]

    let capIndex = 0
    let localStep = 0

    const tick = () => {
      const currentSeq = sequence[capIndex]
      setCapability(currentSeq.cap)
      setStep(localStep)
      if (currentSeq.cap === 'social' && localStep >= 4) {
        setPost((p) => (p + 1) % PLATFORM_POSTS.length)
      }

      localStep += 1
      if (localStep >= currentSeq.steps) {
        localStep = 0
        capIndex += 1
      }

      if (capIndex < sequence.length) {
        window.setTimeout(tick, PRODUCT_MOTION.tourTickMs)
      } else {
        setTouring(false)
        setRunning(true)
        setCapability('social')
        setStep(0)
      }
    }

    window.setTimeout(tick, PRODUCT_MOTION.tourStartMs)
  }

  const activeStep = current.steps[Math.min(step, current.steps.length - 1)]

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />

      <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="overline mb-4 text-signal">{current.overline}</p>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {current.headline}
            <span className="block text-signal-bright">{current.highlight}</span>
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {current.blurb}
          </p>

          <div
            role="tablist"
            aria-label="Capability demos"
            className="mt-7 flex flex-wrap gap-2"
          >
            {capabilities.map((cap) => {
              const isActive = cap.id === capability
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setCapability(cap.id)
                    setStep(0)
                    setTouring(false)
                    setRunning(true)
                  }}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                    isActive
                      ? 'border-signal/60 bg-signal/15 text-ink shadow-[0_0_20px_rgba(15,143,117,0.2)]'
                      : 'border-[var(--line)] text-ink-soft hover:border-signal/40 hover:text-ink'
                  }`}
                >
                  {cap.label}
                </button>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {current.steps.map((s, i) => (
              <div
                key={s.id}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  i === step
                    ? 'border-signal/60 bg-signal/15 text-ink'
                    : i < step
                      ? 'border-signal/30 text-signal'
                      : 'border-[var(--line)] text-ink-soft/70'
                }`}
              >
                {i < step ? <Check className="h-3.5 w-3.5" /> : <s.icon className="h-3.5 w-3.5" />}
                {s.label}
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm text-ink-soft">
            <span className="font-medium text-ink">{activeStep.label}:</span> {activeStep.detail}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={runOneClickDemo} className="cta-pill" disabled={touring}>
              {touring ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {touring ? 'Playing tour…' : 'One-click demo'}
            </button>
            <a
              href={getSmsConsultHref()}
              className="cta-pill"
              aria-label={`Text ${CONTACT_CONFIG.SMS_DISPLAY} to start a consult`}
            >
              <MessageSquare className="h-4 w-4" />
              Text my number for contact
            </a>
            <a
              href={CALENDLY_CONFIG.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal/40 hover:bg-signal/10"
            >
              Book a capability walkthrough
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-soft/70">
            One-click tours build & implement → staff training → content & ads. Opens Messages to{' '}
            {CONTACT_CONFIG.SMS_DISPLAY} for a consult by text.
          </p>
        </div>

        <div
          className={`relative mx-auto w-full ${
            capability === 'social' ? 'max-w-md' : 'max-w-sm'
          }`}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-2xl" />
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              >
                {capability === 'web-agents' && <WebAgentsDiagram step={step} />}
                {capability === 'training' && <TrainingDiagram step={step} />}
                {capability === 'social' && (
                  <SocialDiagram step={step} post={post} stepLabel={activeStep.label} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
