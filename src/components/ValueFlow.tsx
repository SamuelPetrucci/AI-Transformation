'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Clock,
  PiggyBank,
  TrendingUp,
  Code2,
  Bot,
  Cpu,
  PhoneMissed,
  Copy,
  Layers,
  ArrowRight,
} from 'lucide-react'
type PillarId = 'custom-software' | 'ai-automation' | 'modern-tech'

const frictions = [
  {
    id: 'leads',
    label: 'Missed leads',
    detail: 'Calls & forms go cold',
    icon: PhoneMissed,
    pillars: ['ai-automation', 'custom-software'] as PillarId[],
  },
  {
    id: 'busywork',
    label: 'Busywork',
    detail: 'Copy-paste every day',
    icon: Copy,
    pillars: ['ai-automation', 'modern-tech'] as PillarId[],
  },
  {
    id: 'saas',
    label: 'SaaS sprawl',
    detail: 'Tools you rent forever',
    icon: Layers,
    pillars: ['custom-software', 'modern-tech'] as PillarId[],
  },
]

const pillars: {
  id: PillarId
  title: string
  short: string
  icon: typeof Code2
  demoId: string
  delivers: string[]
}[] = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    short: 'Sites, ops hubs, booking—owned by you',
    icon: Code2,
    demoId: 'website',
    delivers: ['Ops software', 'Agent-ready sites', 'Staff can run it'],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    short: 'Agent implementation + staff training',
    icon: Bot,
    demoId: 'agents',
    delivers: ['Faster response', 'Booked calls', 'Team playbooks'],
  },
  {
    id: 'modern-tech',
    title: 'Modern Tech',
    short: 'Integrations, upgrades & content engines',
    icon: Cpu,
    demoId: 'marketing',
    delivers: ['App integrations', 'SEO content', 'Product ads'],
  },
]

const outcomes = [
  { id: 'time', label: 'Save time', icon: Clock, pillars: ['ai-automation', 'custom-software'] as PillarId[] },
  { id: 'cost', label: 'Reduce costs', icon: PiggyBank, pillars: ['custom-software', 'modern-tech'] as PillarId[] },
  { id: 'grow', label: 'Grow', icon: TrendingUp, pillars: ['ai-automation', 'modern-tech'] as PillarId[] },
]

type ValueFlowProps = {
  onSelectDemo?: (demoId: string) => void
}

export default function ValueFlow({ onSelectDemo }: ValueFlowProps) {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<PillarId>('ai-automation')
  const pillar = pillars.find((p) => p.id === active)!

  useEffect(() => {
    if (reduceMotion) return
    const t = setInterval(() => {
      setActive((prev) => {
        const i = pillars.findIndex((p) => p.id === prev)
        return pillars[(i + 1) % pillars.length].id
      })
    }, 5200)
    return () => clearInterval(t)
  }, [reduceMotion])

  const isLit = (ids: PillarId[]) => ids.includes(active)

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55 p-5 backdrop-blur-sm sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.12),transparent_55%)]" />

      <div className="relative z-10 mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label mb-2">How we connect the dots</p>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Friction in → systems out → results.
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft sm:text-base">
            Tap a pillar to see which problems we attack and which outcomes light up—then jump into a live
            diagram of that work.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onSelectDemo?.(pillar.demoId)}
          className="btn-primary shrink-0 self-start !px-4 !py-2.5 text-sm"
        >
          See {pillar.title.split(' ')[0]} demo
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="relative z-10 grid gap-4 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-stretch">
        {/* Friction */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft/70">Your ops</p>
          {frictions.map((f) => {
            const lit = isLit(f.pillars)
            const Icon = f.icon
            return (
              <motion.div
                key={f.id}
                animate={{
                  opacity: lit ? 1 : 0.45,
                  x: reduceMotion ? 0 : lit ? 4 : 0,
                }}
                className={`flex items-start gap-3 rounded-2xl border px-3.5 py-3 transition-colors ${
                  lit
                    ? 'border-ember/35 bg-ember/10'
                    : 'border-[var(--line)] bg-white/40'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    lit ? 'bg-ember/20 text-ember' : 'bg-paper-2 text-ink-soft'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{f.label}</p>
                  <p className="text-xs text-ink-soft">{f.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pillars + connectors */}
        <div className="relative flex flex-col justify-center gap-3">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--line)] lg:block"
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal lg:text-center">
            AI Transformation
          </p>
          {pillars.map((p) => {
            const selected = p.id === active
            const Icon = p.icon
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setActive(p.id)
                  onSelectDemo?.(p.demoId)
                }}
                className={`relative z-10 flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                  selected
                    ? 'border-signal/50 bg-signal/15 shadow-[0_0_40px_rgba(15,143,117,0.16)]'
                    : 'border-[var(--line)] bg-white/60 hover:border-signal/35 hover:bg-white/80'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    selected ? 'bg-ink text-paper' : 'bg-signal/15 text-signal'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-base font-semibold text-ink">{p.title}</span>
                  <span className="mt-0.5 block text-xs text-ink-soft sm:text-sm">{p.short}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Outcomes */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft/70">Outcomes</p>
          {outcomes.map((o) => {
            const lit = isLit(o.pillars)
            const Icon = o.icon
            return (
              <motion.div
                key={o.id}
                animate={{
                  opacity: lit ? 1 : 0.45,
                  x: reduceMotion ? 0 : lit ? -4 : 0,
                }}
                className={`flex items-start gap-3 rounded-2xl border px-3.5 py-3 transition-colors ${
                  lit
                    ? 'border-signal/45 bg-signal/10'
                    : 'border-[var(--line)] bg-white/40'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    lit ? 'bg-signal text-paper' : 'bg-paper-2 text-ink-soft'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{o.label}</p>
                  <p className="text-xs text-ink-soft">
                    {lit ? 'Active path' : 'Related path'}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--line)] pt-5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">
            {pillar.title} delivers
          </span>
          {pillar.delivers.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
