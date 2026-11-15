'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bot, Code2, Cpu } from 'lucide-react'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'

type Path = {
  id: string
  friction: string
  system: string
  result: string
  icon: typeof Code2
  demoId: string
}

const paths: Path[] = [
  {
    id: 'agents',
    friction: 'Missed leads',
    system: 'AI Automation',
    result: 'Calls booked',
    icon: Bot,
    demoId: 'agents',
  },
  {
    id: 'ops',
    friction: 'SaaS sprawl',
    system: 'Custom Software',
    result: 'Owned ops stack',
    icon: Code2,
    demoId: 'ops',
  },
  {
    id: 'marketing',
    friction: 'Manual content',
    system: 'Modern Tech',
    result: 'Always-on ads',
    icon: Cpu,
    demoId: 'marketing',
  },
]

type ValueFlowProps = {
  onSelectDemo?: (demoId: string) => void
}

export default function ValueFlow({ onSelectDemo }: ValueFlowProps) {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(paths[0].id)

  const choose = (path: Path) => {
    setActive(path.id)
    onSelectDemo?.(path.demoId)
  }

  return (
    <div className="relative">
      <div className="mb-6 max-w-2xl">
        <p className="section-label mb-2">How we connect the dots</p>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Friction → system → result
        </h3>
        <p className="mt-2 text-sm text-ink-soft sm:text-base">
          Pick a path to open that live demo below.
        </p>
      </div>

      <div className="flex flex-col gap-1" role="list">
        <div
          className="mb-1 hidden grid-cols-[1fr_auto_1.1fr_auto_1fr_auto] gap-3 px-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft/60 sm:grid"
          aria-hidden
        >
          <span>Friction</span>
          <span />
          <span>What we build</span>
          <span />
          <span>Result</span>
          <span />
        </div>

        {paths.map((path) => {
          const selected = path.id === active
          const Icon = path.icon
          return (
            <motion.button
              key={path.id}
              type="button"
              role="listitem"
              onClick={() => choose(path)}
              aria-pressed={selected}
              initial={false}
              animate={{
                backgroundColor: selected ? 'rgba(15, 143, 117, 0.1)' : 'rgba(255,255,255,0)',
              }}
              transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              className={`group grid w-full grid-cols-1 items-center gap-3 rounded-xl px-3 py-3.5 text-left transition-colors sm:grid-cols-[1fr_auto_1.1fr_auto_1fr_auto] sm:gap-3 sm:px-4 ${
                selected
                  ? 'ring-1 ring-signal/35'
                  : 'hover:bg-white/50'
              }`}
            >
              <span className="min-w-0">
                <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/55 sm:hidden">
                  Friction
                </span>
                <span
                  className={`text-sm font-semibold sm:text-base ${
                    selected ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {path.friction}
                </span>
              </span>

              <Connector lit={selected} reduceMotion={!!reduceMotion} />

              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    selected ? 'bg-ink text-paper' : 'bg-signal/12 text-signal'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/55 sm:hidden">
                    What we build
                  </span>
                  <span className="font-display block text-base font-semibold text-ink sm:text-lg">
                    {path.system}
                  </span>
                </span>
              </span>

              <Connector lit={selected} reduceMotion={!!reduceMotion} />

              <span className="min-w-0">
                <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/55 sm:hidden">
                  Result
                </span>
                <span
                  className={`text-sm font-semibold sm:text-base ${
                    selected ? 'text-signal' : 'text-ink-soft'
                  }`}
                >
                  {path.result}
                </span>
              </span>

              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold transition ${
                  selected ? 'text-signal' : 'text-ink-soft/50 group-hover:text-ink-soft'
                }`}
              >
                Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function Connector({ lit, reduceMotion }: { lit: boolean; reduceMotion: boolean }) {
  return (
    <span className="relative hidden h-px w-8 overflow-hidden sm:block md:w-12" aria-hidden>
      <span
        className={`absolute inset-0 border-t border-dashed transition-colors ${
          lit ? 'border-signal/70' : 'border-[var(--line)]'
        }`}
      />
      {!reduceMotion && lit && (
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal"
          initial={{ left: '0%' }}
          animate={{ left: '100%' }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </span>
  )
}
