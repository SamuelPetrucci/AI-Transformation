'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  Megaphone,
  Bot,
  Clock,
  Zap,
  Activity,
  Code2,
  Calendar,
  Database,
  PiggyBank,
  Plug,
  BarChart3,
  GraduationCap,
  BookOpen,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { ProductLine } from '@/config/products'

type FlowNode = {
  id: string
  label: string
  detail: string
  icon: LucideIcon
}

const DIAGRAMS: Record<
  ProductLine['id'],
  { caption: string; nodes: FlowNode[] }
> = {
  'content-engine': {
    caption: 'Train → script → human-approve → post (and optionally advertise)',
    nodes: [
      {
        id: 'train',
        label: 'Train agent',
        detail: 'Brand, offers, logos, voice',
        icon: Search,
      },
      {
        id: 'script',
        label: 'Plan scripts',
        detail: 'Hooks + SEO outlines',
        icon: Sparkles,
      },
      {
        id: 'approve',
        label: 'Human gate',
        detail: 'Approve every draft',
        icon: ShieldCheck,
      },
      {
        id: 'post',
        label: 'Post + ads',
        detail: 'Any platforms you use',
        icon: Megaphone,
      },
    ],
  },
  'ai-assistance': {
    caption: 'Audit opportunities → wire cron or triggers → monitor what runs',
    nodes: [
      {
        id: 'audit',
        label: 'Efficiency audit',
        detail: 'Map high-ROI tasks',
        icon: Search,
      },
      {
        id: 'cron',
        label: 'Cron jobs',
        detail: 'Reports, digests, cleanups',
        icon: Clock,
      },
      {
        id: 'trigger',
        label: 'Triggers',
        detail: 'Leads, tickets, bookings',
        icon: Zap,
      },
      {
        id: 'care',
        label: 'Care plan',
        detail: 'Monitor + improve',
        icon: Activity,
      },
    ],
  },
  'custom-software': {
    caption: 'Brief → build owned software → connect booking/CRM → hand off',
    nodes: [
      {
        id: 'brief',
        label: 'Brief',
        detail: 'Goals + process map',
        icon: Search,
      },
      {
        id: 'site',
        label: 'Website',
        detail: 'Conversion-ready build',
        icon: Code2,
      },
      {
        id: 'book',
        label: 'Booking',
        detail: 'Calendar without phone tag',
        icon: Calendar,
      },
      {
        id: 'crm',
        label: 'CRM / ops',
        detail: 'Pipelines you own',
        icon: Database,
      },
    ],
  },
  'save-on-tech': {
    caption: 'Audit what you rent → rebuild or connect → cut recurring spend',
    nodes: [
      {
        id: 'audit',
        label: 'Stack audit',
        detail: 'What you rent today',
        icon: Search,
      },
      {
        id: 'rebuild',
        label: 'Rebuild',
        detail: 'Own vs per-seat SaaS',
        icon: PiggyBank,
      },
      {
        id: 'integrate',
        label: 'Integrate',
        detail: 'Syncs & triggers',
        icon: Plug,
      },
      {
        id: 'dash',
        label: 'Dashboard',
        detail: 'KPIs in one place',
        icon: BarChart3,
      },
    ],
  },
  enablement: {
    caption: 'Capture knowledge → train people + agents → supervise safely',
    nodes: [
      {
        id: 'capture',
        label: 'Capture SOPs',
        detail: 'FAQs, policies, docs',
        icon: BookOpen,
      },
      {
        id: 'kb',
        label: 'Knowledge base',
        detail: 'Trusted source for agents',
        icon: Database,
      },
      {
        id: 'train',
        label: 'Staff training',
        detail: 'Playbooks + sessions',
        icon: GraduationCap,
      },
      {
        id: 'supervise',
        label: 'Supervise',
        detail: 'Team stays in control',
        icon: Users,
      },
    ],
  },
}

/** Fallback if a new product line is added before a diagram exists */
function fallbackDiagram(line: ProductLine) {
  return {
    caption: line.blurb,
    nodes: line.products.slice(0, 4).map((p, i) => ({
      id: p.id,
      label: p.name,
      detail: p.job,
      icon: ([Search, Bot, Sparkles, ShieldCheck] as LucideIcon[])[i % 4],
    })),
  }
}

type ProductFlowDiagramProps = {
  line: ProductLine
  /** Animate through nodes when visible */
  animate?: boolean
}

export default function ProductFlowDiagram({
  line,
  animate = true,
}: ProductFlowDiagramProps) {
  const reduceMotion = useReducedMotion()
  const diagram = DIAGRAMS[line.id] ?? fallbackDiagram(line)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!animate || reduceMotion) return
    const t = setInterval(
      () => setActive((a) => (a + 1) % diagram.nodes.length),
      1800
    )
    return () => clearInterval(t)
  }, [animate, reduceMotion, diagram.nodes.length])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white/55 p-4 sm:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,143,117,0.1),transparent_55%)]"
      />
      <p className="relative z-10 mb-4 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
        How it works
      </p>
      <p className="relative z-10 mb-5 max-w-2xl text-sm text-ink-soft">{diagram.caption}</p>

      {/* Desktop: horizontal flow */}
      <div className="relative z-10 hidden items-stretch gap-2 md:flex">
        {diagram.nodes.map((node, i) => {
          const Icon = node.icon
          const lit = i === active || (!animate && reduceMotion)
          const done = animate && i < active
          return (
            <div key={node.id} className="flex min-w-0 flex-1 items-stretch gap-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full flex-col rounded-xl border px-3 py-3 text-left transition-all ${
                  lit
                    ? 'border-signal/45 bg-signal/12 shadow-[0_0_28px_rgba(15,143,117,0.12)]'
                    : done
                      ? 'border-[var(--line)] bg-white/70'
                      : 'border-[var(--line)] bg-white/40'
                }`}
              >
                <span
                  className={`mb-2 flex h-9 w-9 items-center justify-center rounded-full ${
                    lit ? 'bg-ink text-paper' : 'bg-signal/15 text-signal'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-display text-sm font-semibold text-ink">{node.label}</span>
                <span className="mt-0.5 text-xs leading-snug text-ink-soft">{node.detail}</span>
                <span className="mt-2 font-mono text-[10px] text-ink-soft/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
              {i < diagram.nodes.length - 1 && (
                <span className="flex shrink-0 items-center self-center text-signal/50" aria-hidden>
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical stack */}
      <div className="relative z-10 space-y-2 md:hidden">
        {diagram.nodes.map((node, i) => {
          const Icon = node.icon
          const lit = i === active
          return (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => setActive(i)}
              animate={{ opacity: lit ? 1 : 0.55 }}
              className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left ${
                lit
                  ? 'border-signal/45 bg-signal/12'
                  : 'border-[var(--line)] bg-white/45'
              }`}
            >
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  lit ? 'bg-ink text-paper' : 'bg-signal/15 text-signal'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-sm font-semibold text-ink">
                  {node.label}
                </span>
                <span className="block text-xs text-ink-soft">{node.detail}</span>
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export { DIAGRAMS }
