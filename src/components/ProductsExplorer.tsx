'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Clock,
  PiggyBank,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import ProductFlowDiagram from './ProductFlowDiagram'
import {
  PRODUCT_LINES,
  formatProductPrice,
  type ProductLine,
} from '@/config/products'
import { CALENDLY_CONFIG } from '@/config/calendly'

const goalMeta: Record<
  ProductLine['goal'],
  { label: string; icon: typeof TrendingUp }
> = {
  grow: { label: 'Grow', icon: TrendingUp },
  'save-time': { label: 'Save time', icon: Clock },
  'save-money': { label: 'Save money', icon: PiggyBank },
  'own-stack': { label: 'Own your stack', icon: Wrench },
}

type ProductsExplorerProps = {
  /** Deep-link hash without #, e.g. content-engine */
  initialLineId?: string
}

export default function ProductsExplorer({ initialLineId }: ProductsExplorerProps) {
  const initial =
    PRODUCT_LINES.find((l) => l.id === initialLineId)?.id ?? PRODUCT_LINES[0].id
  const [activeId, setActiveId] = useState(initial)
  const active = PRODUCT_LINES.find((l) => l.id === activeId) ?? PRODUCT_LINES[0]
  const meta = goalMeta[active.goal]
  const GoalIcon = meta.icon

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fromHash = window.location.hash.replace(/^#/, '')
    const candidate = initialLineId || fromHash
    const match = PRODUCT_LINES.find((l) => l.id === candidate)
    if (match) setActiveId(match.id)
  }, [initialLineId])

  useEffect(() => {
    // Keep URL hash in sync for shareable deep links without full navigation
    if (typeof window === 'undefined') return
    const next = `#${activeId}`
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', `/products${next}`)
    }
  }, [activeId])

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Line tabs */}
      <div
        role="tablist"
        aria-label="Product lines"
        className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PRODUCT_LINES.map((line) => {
          const selected = line.id === activeId
          const g = goalMeta[line.goal]
          return (
            <button
              key={line.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`tab-${line.id}`}
              onClick={() => setActiveId(line.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selected
                  ? 'border-signal/45 bg-signal/15 text-ink'
                  : 'border-[var(--line)] bg-white/50 text-ink-soft hover:border-signal/30 hover:text-ink'
              }`}
            >
              <span className="font-display">{line.name}</span>
              <span className="ml-2 hidden font-mono text-[9px] tracking-wider text-signal uppercase sm:inline">
                {g.label}
              </span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          id={active.id}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-28"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <GoalIcon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                  {meta.label}
                </span>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {active.name}
              </h2>
              <p className="mt-3 text-base text-ink-soft sm:text-lg">{active.blurb}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {active.id === 'content-engine' && (
                <Link href="/content-engine" className="btn-ghost !px-4 !py-2.5 text-sm">
                  See live demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
              <a
                href={CALENDLY_CONFIG.CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill !px-4 !py-2.5 text-sm"
              >
                Book consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <ProductFlowDiagram line={active} />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {active.products.map((product) => (
              <article
                key={product.id}
                className={`flex flex-col rounded-2xl border px-5 py-5 ${
                  product.recommended
                    ? 'border-signal/35 bg-signal/10'
                    : 'border-[var(--line)] bg-white/50'
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {product.name}
                    {product.recommended && (
                      <span className="ml-2 align-middle font-mono text-[9px] tracking-wider text-signal uppercase">
                        Popular
                      </span>
                    )}
                  </h3>
                  <p className="font-display text-base font-semibold text-signal">
                    {product.price.amount}
                  </p>
                </div>
                <p className="mt-2 text-sm text-ink">{product.job}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{product.outcome}</p>
                {product.price.note && (
                  <p className="mt-1 text-xs text-ink-soft/70">{product.price.note}</p>
                )}
                <ul className="mt-3 flex-1 space-y-1.5">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[10px] tracking-wider text-ink-soft/50 uppercase">
                  {formatProductPrice(product.price)}
                </p>
                <a
                  href={CALENDLY_CONFIG.CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:underline"
                >
                  Get this product
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="mt-12 text-center text-sm text-ink-soft">
        Not sure which line fits?{' '}
        <a
          href={CALENDLY_CONFIG.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-signal hover:underline"
        >
          Book a consult
        </a>
        —we&apos;ll match the product to the outcome you need.
      </p>
    </div>
  )
}
