'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Image as ImageIcon,
  CalendarClock,
  Megaphone,
  Check,
  Play,
  MessageSquare,
  Globe,
  Bot,
  Workflow,
  GraduationCap,
  Search,
  Rocket,
  Users,
  Code2,
  Plug,
  ShieldCheck,
  Pause,
  ArrowRight,
  Building2,
  Target,
  Wrench,
} from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { CONTACT_CONFIG, getSmsConsultHref } from '@/config/contact'

type SolutionId = 'web-agents' | 'training' | 'social' | 'overview'

const solutions: {
  id: Exclude<SolutionId, 'overview'>
  label: string
  short: string
  headline: string
  highlight: string
  blurb: string
  businessNeed: string
  bridgeWork: string
  techOutcome: string
  layers: { id: string; label: string; detail: string; icon: typeof Sparkles }[]
}[] = [
  {
    id: 'web-agents',
    label: 'Web + Agents',
    short: 'Sites & automation',
    headline: 'We build the product.',
    highlight: 'You keep the customers.',
    blurb:
      'Custom sites and apps with agents wired in—lead triage, booking, follow-up—so tech handles the busywork and you stay on the work that pays.',
    businessNeed: 'Leads, bookings, brand presence',
    bridgeWork: 'Scope → build → wire agents → train',
    techOutcome: 'Owned website + live agents',
    layers: [
      { id: 'brief', label: 'Brief', detail: 'Goals, brand, agent scopes', icon: Search },
      { id: 'build', label: 'Build', detail: 'Next.js site / app', icon: Code2 },
      { id: 'agents', label: 'Agents', detail: 'Intents, tools, guardrails', icon: Bot },
      { id: 'automate', label: 'Automate', detail: 'CRM, calendar, SMS', icon: Workflow },
      { id: 'live', label: 'Go live', detail: 'Host, monitor, handoff', icon: Rocket },
    ],
  },
  {
    id: 'training',
    label: 'Train & Implement',
    short: 'Adoption that sticks',
    headline: 'We ship the system.',
    highlight: 'Your team owns it.',
    blurb:
      'Discovery through production with training baked in—so the stack isn’t a black box. Your people know how it works and what to do next.',
    businessNeed: 'Adoption, clarity, ROI',
    bridgeWork: 'Discover → pilot → train → scale',
    techOutcome: 'Running workflows + playbooks',
    layers: [
      { id: 'discover', label: 'Discover', detail: 'Process map + ROI', icon: Search },
      { id: 'design', label: 'Design', detail: 'Scopes & metrics', icon: Plug },
      { id: 'pilot', label: 'Pilot', detail: 'Sandbox go / no-go', icon: Sparkles },
      { id: 'train', label: 'Train', detail: 'Sessions + playbooks', icon: GraduationCap },
      { id: 'scale', label: 'Scale', detail: 'Production + optimize', icon: ShieldCheck },
    ],
  },
  {
    id: 'social',
    label: 'Social Automation',
    short: 'Content & ads engine',
    headline: 'You run the business.',
    highlight: 'We keep you posting.',
    blurb:
      'A configured content + ads engine drafts, schedules, and keeps advertising warm—so your feed stays alive while you stay with customers.',
    businessNeed: 'Visibility without the time sink',
    bridgeWork: 'Brief → draft → approve → publish',
    techOutcome: 'Calendar + Meta ads staying warm',
    layers: [
      { id: 'brief', label: 'Brief', detail: 'Topics, offers, voice', icon: Sparkles },
      { id: 'draft', label: 'Draft', detail: 'Captions + creative', icon: ImageIcon },
      { id: 'schedule', label: 'Schedule', detail: 'IG + Facebook', icon: CalendarClock },
      { id: 'ads', label: 'Advertise', detail: 'Campaigns stay warm', icon: Megaphone },
    ],
  },
]

const architectureColumns = [
  {
    id: 'business',
    title: 'Your business',
    subtitle: 'Focus here',
    tone: 'ember' as const,
    items: [
      { icon: Users, label: 'Customers' },
      { icon: Wrench, label: 'Operations' },
      { icon: Target, label: 'Growth' },
    ],
  },
  {
    id: 'bridge',
    title: 'AIT bridge',
    subtitle: 'We sit here',
    tone: 'signal' as const,
    items: [
      { icon: Search, label: 'Discover' },
      { icon: Code2, label: 'Build' },
      { icon: GraduationCap, label: 'Train' },
      { icon: Workflow, label: 'Run' },
    ],
  },
  {
    id: 'tech',
    title: 'Solutions',
    subtitle: 'We deliver these',
    tone: 'mist' as const,
    items: [
      { icon: Globe, label: 'Web / Apps' },
      { icon: Bot, label: 'AI Agents' },
      { icon: Megaphone, label: 'Social / Ads' },
      { icon: Plug, label: 'Integrations' },
    ],
  },
]

function ArchitectureMap({
  activeSolution,
  step,
}: {
  activeSolution: SolutionId
  step: number
}) {
  const solution = solutions.find((s) => s.id === activeSolution)
  const pulseIndex = solution ? step % solution.layers.length : step % 4

  const highlightTech = useMemo(() => {
    if (activeSolution === 'web-agents') return ['Web / Apps', 'AI Agents', 'Integrations']
    if (activeSolution === 'training') return ['AI Agents', 'Integrations', 'Web / Apps']
    if (activeSolution === 'social') return ['Social / Ads', 'Integrations']
    return ['Web / Apps', 'AI Agents', 'Social / Ads', 'Integrations']
  }, [activeSolution])

  const highlightBridge = useMemo(() => {
    if (activeSolution === 'web-agents') return ['Build', 'Run', 'Train']
    if (activeSolution === 'training') return ['Discover', 'Train', 'Run']
    if (activeSolution === 'social') return ['Build', 'Run']
    return ['Discover', 'Build', 'Train', 'Run']
  }, [activeSolution])

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-paper/70">
            Solution architecture
          </p>
          <p className="mt-1 text-[11px] text-paper/55">
            Tech on one side. Your business on the other. We bridge the gap.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
          {solution ? solution.short : 'Full stack'}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
        {architectureColumns.map((col, colIndex) => (
          <div key={col.id} className="contents">
            <div
              className={`rounded-2xl border p-3 ${
                col.id === 'bridge'
                  ? 'border-signal/50 bg-signal/15 shadow-[0_0_28px_rgba(15,143,117,0.22)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                {col.id === 'business' && <Building2 className="h-3.5 w-3.5 text-ember" />}
                {col.id === 'bridge' && <Workflow className="h-3.5 w-3.5 text-signal-bright" />}
                {col.id === 'tech' && <Code2 className="h-3.5 w-3.5 text-paper/70" />}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-paper">
                    {col.title}
                  </p>
                  <p className="text-[10px] text-paper/55">{col.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {col.items.map((item, i) => {
                  const Icon = item.icon
                  const lit =
                    col.id === 'tech'
                      ? highlightTech.includes(item.label)
                      : col.id === 'bridge'
                        ? highlightBridge.includes(item.label)
                        : true
                  const activePulse =
                    col.id === 'bridge'
                      ? highlightBridge[pulseIndex % highlightBridge.length] === item.label
                      : col.id === 'tech'
                        ? highlightTech[pulseIndex % highlightTech.length] === item.label
                        : i === pulseIndex % col.items.length

                  return (
                    <li
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 text-xs transition ${
                        activePulse
                          ? 'border-signal/50 bg-signal/20 text-paper'
                          : lit
                            ? 'border-white/15 bg-white/5 text-paper/85'
                            : 'border-transparent text-paper/35'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      {item.label}
                    </li>
                  )
                })}
              </ul>
            </div>

            {colIndex < architectureColumns.length - 1 && (
              <div className="hidden items-center justify-center sm:flex">
                <motion.div
                  animate={{ opacity: [0.35, 1, 0.35], x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: colIndex * 0.2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-signal/40 bg-signal/15 text-signal-bright"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {solution && (
        <motion.div
          key={solution.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 grid gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-paper/75 sm:grid-cols-3"
        >
          <div>
            <p className="text-[10px] uppercase tracking-wider text-ember/90">Business need</p>
            <p className="mt-1 text-paper/90">{solution.businessNeed}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-signal-bright">Bridge work</p>
            <p className="mt-1 text-paper/90">{solution.bridgeWork}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-paper/55">What you get</p>
            <p className="mt-1 text-paper/90">{solution.techOutcome}</p>
          </div>
        </motion.div>
      )}

      {!solution && (
        <p className="mt-4 text-xs leading-relaxed text-paper/65">
          Pick a solution below—or hit one-click demo—to see how each offering flows through the
          bridge from business need to working tech.
        </p>
      )}
    </div>
  )
}

function PipelineStrip({
  layers,
  step,
}: {
  layers: { id: string; label: string; detail: string; icon: typeof Sparkles }[]
  step: number
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {layers.map((s, i) => (
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
  )
}

export default function SocialContentEngine() {
  const [solution, setSolution] = useState<SolutionId>('overview')
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(true)
  const [touring, setTouring] = useState(false)

  const current = solutions.find((s) => s.id === solution)
  const stepCount = current?.layers.length ?? 4

  useEffect(() => {
    setStep(0)
  }, [solution])

  useEffect(() => {
    if (!running || touring) return
    const t = setInterval(() => {
      setStep((s) => (s + 1) % stepCount)
    }, 2600)
    return () => clearInterval(t)
  }, [running, touring, stepCount])

  const runOneClickDemo = () => {
    setRunning(false)
    setTouring(true)
    setSolution('overview')
    setStep(0)

    const sequence: { id: SolutionId; steps: number }[] = [
      { id: 'overview', steps: 3 },
      { id: 'web-agents', steps: 5 },
      { id: 'training', steps: 5 },
      { id: 'social', steps: 4 },
    ]

    let seqIndex = 0
    let localStep = 0

    const tick = () => {
      const currentSeq = sequence[seqIndex]
      setSolution(currentSeq.id)
      setStep(localStep)

      localStep += 1
      if (localStep >= currentSeq.steps) {
        localStep = 0
        seqIndex += 1
      }

      if (seqIndex < sequence.length) {
        window.setTimeout(tick, 1000)
      } else {
        setTouring(false)
        setRunning(true)
        setSolution('overview')
        setStep(0)
      }
    }

    window.setTimeout(tick, 500)
  }

  const activeLayer = current?.layers[Math.min(step, current.layers.length - 1)]

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />

      <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="overline mb-4 text-signal">Architecture · how we help</p>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {current ? (
              <>
                {current.headline}
                <span className="block text-signal-bright">{current.highlight}</span>
              </>
            ) : (
              <>
                We bridge tech and business.
                <span className="block text-signal-bright">You focus on what matters.</span>
              </>
            )}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {current
              ? current.blurb
              : 'Visualize the stack: your business on one side, software and automation on the other—and AI Transformation in the middle translating needs into working systems.'}
          </p>

          <div role="tablist" aria-label="Solution architecture" className="mt-7 flex flex-wrap gap-2">
            <button
              type="button"
              role="tab"
              aria-selected={solution === 'overview'}
              onClick={() => {
                setSolution('overview')
                setStep(0)
                setTouring(false)
                setRunning(true)
              }}
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                solution === 'overview'
                  ? 'border-signal/60 bg-signal/15 text-ink shadow-[0_0_20px_rgba(15,143,117,0.2)]'
                  : 'border-[var(--line)] text-ink-soft hover:border-signal/40 hover:text-ink'
              }`}
            >
              Full architecture
            </button>
            {solutions.map((s) => {
              const isActive = s.id === solution
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSolution(s.id)
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
                  {s.label}
                </button>
              )
            })}
          </div>

          {current && (
            <>
              <PipelineStrip layers={current.layers} step={step} />
              {activeLayer && (
                <p className="mt-3 text-sm text-ink-soft">
                  <span className="font-medium text-ink">{activeLayer.label}:</span>{' '}
                  {activeLayer.detail}
                </p>
              )}
            </>
          )}

          {!current && (
            <p className="mt-5 text-sm text-ink-soft">
              Select a solution to trace its path through the bridge—or run the one-click tour of the
              full architecture.
            </p>
          )}

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
              Walk the architecture with us
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-soft/70">
            One-click tours the bridge and each solution. Opens Messages to{' '}
            {CONTACT_CONFIG.SMS_DISPLAY} for a consult by text.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-2xl" />
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ArchitectureMap activeSolution={solution} step={step} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
