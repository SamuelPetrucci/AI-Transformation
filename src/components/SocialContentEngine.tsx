'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Megaphone,
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
} from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { CONTACT_CONFIG, getSmsConsultHref } from '@/config/contact'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'

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
    overline: 'Automated content engines & product advertising',
    headline: 'We build content engines.',
    highlight: 'Train. Script. Human-approve. Post anywhere.',
    blurb:
      'We train an agent on your business data, brand, and logos. It plans scripts and drafts for any media platform you use—Facebook, Instagram, LinkedIn, X, TikTok, YouTube, and more—then a human approves every piece before it goes live. Past content becomes product ads when you have it; otherwise we plan a new approach. Checks and balances keep the agent on brand while automation saves the hours.',
    steps: [
      {
        id: 'train',
        label: 'Train the agent',
        detail: 'Business data, brand, logos, voice',
        icon: Search,
      },
      {
        id: 'scripts',
        label: 'Plan scripts',
        detail: 'Hooks, offers, SEO-minded outlines',
        icon: Sparkles,
      },
      {
        id: 'approve',
        label: 'Human approval',
        detail: 'Checks & balances before publish',
        icon: ShieldCheck,
      },
      {
        id: 'post',
        label: 'Post + advertise',
        detail: 'Any platforms you choose',
        icon: Megaphone,
      },
    ],
  },
]

const feedPosts = [
  {
    platform: 'LinkedIn',
    tone: 'from-ember/40 to-ember/30',
    title: 'Before vs after HVAC tune-up',
    caption: 'Draft ready. Human approved. Posted while you were on jobs.',
  },
  {
    platform: 'TikTok',
    tone: 'from-signal/40 to-signal-bright/25',
    title: 'Spring service special',
    caption: 'Same script, platform-native cut—agent drafted, you signed off.',
  },
  {
    platform: 'YouTube Shorts',
    tone: 'from-signal/45 to-signal-bright/30',
    title: 'Lead form campaign live',
    caption: 'Organic post → product ad creative. Your budget works; brand stays yours.',
  },
  {
    platform: 'X · Instagram · more',
    tone: 'from-ember/35 to-signal/30',
    title: 'Team tip Tuesday',
    caption: 'Any channel you name. Calendar fills. Nothing publishes without a human yes.',
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

const engineStages = [
  {
    id: 'train',
    label: 'Train',
    detail: 'Business data, brand voice, logos',
    icon: Search,
  },
  {
    id: 'scripts',
    label: 'Scripts',
    detail: 'Hooks & outlines for every channel',
    icon: Sparkles,
  },
  {
    id: 'approve',
    label: 'Approve',
    detail: 'You sign off before anything posts',
    icon: ShieldCheck,
  },
  {
    id: 'post',
    label: 'Post + ads',
    detail: 'Publish natively, then amplify',
    icon: Megaphone,
  },
] as const

function SocialDiagram({
  step,
  post,
}: {
  step: number
  post: number
}) {
  const active = step % engineStages.length
  const current = feedPosts[post % feedPosts.length]
  const progress = (active + 1) / engineStages.length

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] shadow-[0_0_60px_rgba(15,143,117,0.18)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
          Live content engine
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
          {engineStages[active].label}
        </span>
      </div>

      <div className="relative min-h-[360px] p-4">
        {/* Pipeline progress rail */}
        <div className="relative mb-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-signal to-signal-bright"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
          />
        </div>

        {/* Flow diagram nodes */}
        <div className="relative space-y-0">
          {engineStages.map((stage, i) => {
            const Icon = stage.icon
            const isActive = i === active
            const isDone = i < active
            const isUpcoming = i > active

            return (
              <div key={stage.id} className="relative">
                {i < engineStages.length - 1 ? (
                  <motion.div
                    className="absolute left-[1.15rem] top-12 h-[calc(100%-0.5rem)] w-px origin-top bg-white/15"
                    aria-hidden
                  >
                    <motion.div
                      className="w-full bg-signal-bright"
                      initial={{ height: '0%' }}
                      animate={{ height: isDone || isActive ? '100%' : '0%' }}
                      transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                    />
                  </motion.div>
                ) : null}

                <motion.div
                  animate={{
                    opacity: isUpcoming ? 0.45 : 1,
                    x: isActive ? 2 : 0,
                  }}
                  transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                  className={`relative z-10 flex items-start gap-3 rounded-2xl border px-3 py-3 ${
                    isActive
                      ? 'border-signal/55 bg-signal/20 shadow-[0_0_28px_rgba(15,143,117,0.28)]'
                      : isDone
                        ? 'border-white/15 bg-white/[0.06]'
                        : 'border-white/10 bg-black/15'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isDone
                        ? 'bg-signal text-paper'
                        : isActive
                          ? 'bg-signal-bright text-ink'
                          : 'bg-white/10 text-paper/65'
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-paper">{stage.label}</p>
                      {isActive ? (
                        <motion.span
                          className="rounded-full bg-signal-bright/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-signal-bright"
                          animate={{ opacity: [0.65, 1, 0.65] }}
                          transition={{ duration: PRODUCT_MOTION.pulse, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          Now
                        </motion.span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-paper/65">{stage.detail}</p>
                  </div>
                </motion.div>

                {i < engineStages.length - 1 ? <div className="h-2" /> : null}
              </div>
            )
          })}
        </div>

        {/* Output preview — only emphasizes once we reach approve/post */}
        <AnimatePresence mode="wait">
          {active >= 2 ? (
            <motion.div
              key={`${current.platform}-${post}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              className={`mt-4 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${current.tone} px-3 py-3`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/80">
                  {current.platform}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-paper/55">
                  {active === 2 ? 'Awaiting approval' : 'Ready to publish'}
                </p>
              </div>
              <p className="mt-1.5 text-sm font-medium text-paper">{current.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper/75">{current.caption}</p>
            </motion.div>
          ) : (
            <motion.p
              key="pipeline-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-xs leading-relaxed text-paper/60"
            >
              Train → scripts → human approval → post &amp; product ads. Nothing goes live without your yes.
            </motion.p>
          )}
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
    const interval =
      capability === 'social' ? PRODUCT_MOTION.contentStepMs : PRODUCT_MOTION.stepMs
    const t = setInterval(() => {
      setStep((s) => {
        const next = (s + 1) % stepCount
        // Advance sample posts only when the pipeline lands on approve/post
        if (capability === 'social' && next >= 2) {
          setPost((p) => (p + 1) % feedPosts.length)
        }
        return next
      })
    }, interval)
    return () => clearInterval(t)
  }, [running, touring, stepCount, capability])

  const runOneClickDemo = () => {
    setRunning(false)
    setTouring(true)
    setCapability('web-agents')
    setStep(0)
    setPost(0)

    const sequence: { cap: CapabilityId; steps: number }[] = [
      { cap: 'web-agents', steps: 5 },
      { cap: 'training', steps: 5 },
      { cap: 'social', steps: 4 },
    ]

    let capIndex = 0
    let localStep = 0

    const tick = () => {
      const currentSeq = sequence[capIndex]
      setCapability(currentSeq.cap)
      setStep(localStep)
      if (currentSeq.cap === 'social' && localStep % 2 === 0) {
        setPost((p) => (p + 1) % feedPosts.length)
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

        <div className="relative mx-auto w-full max-w-sm">
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
                {capability === 'social' && <SocialDiagram step={step} post={post} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
