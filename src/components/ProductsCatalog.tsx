'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  PiggyBank,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { PRODUCT_LINES, type ProductGoal } from '@/config/products'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'
import { openCalendlyPopup } from '@/lib/calendly-popup'

const goalMeta: Record<ProductGoal, { label: string; icon: typeof TrendingUp }> = {
  grow: { label: 'Grow', icon: TrendingUp },
  'save-time': { label: 'Save time', icon: Clock },
  'save-money': { label: 'Save money', icon: PiggyBank },
  'own-stack': { label: 'Own your stack', icon: Wrench },
}

export default function ProductsCatalog() {
  const [openId, setOpenId] = useState<string | null>(null)

  const bookConsultation = () => {
    void openCalendlyPopup()
  }

  const scrollToEngine = () => {
    document.getElementById('social-ads')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="products" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Product offers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Four outcomes. Five product lines.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Pick a line to see the products inside. Nothing else loads until you ask—so it stays
            clear, not overwhelming.
          </motion.p>
        </div>

        <div className="mx-auto max-w-3xl space-y-2">
          {PRODUCT_LINES.map((line) => {
            const primary = goalMeta[line.goals[0]]
            const GoalIcon = primary.icon
            const isOpen = openId === line.id

            return (
              <div
                key={line.id}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-signal/40 bg-white/70'
                    : 'border-[var(--line)] bg-white/45 hover:border-signal/25'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : line.id)}
                  className="flex w-full items-start gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <GoalIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                        {line.name}
                      </span>
                      {line.goals.map((goal) => (
                        <span
                          key={goal}
                          className="font-mono text-[10px] tracking-[0.14em] text-signal uppercase"
                        >
                          {goalMeta[goal].label}
                        </span>
                      ))}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                      {line.blurb}
                    </span>
                    {!isOpen && (
                      <span className="mt-2 block font-mono text-[10px] tracking-wider text-ink-soft/60 uppercase">
                        {line.products.length} products · tap to open
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    className={`mt-2 h-5 w-5 shrink-0 text-ink-soft transition-transform ${
                      isOpen ? 'rotate-180 text-signal' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: PRODUCT_MOTION.expand, ease: PRODUCT_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-[var(--line)] px-5 py-5 sm:px-6">
                        {line.products.map((product) => (
                          <article
                            key={product.id}
                            className={`rounded-xl border px-4 py-4 sm:px-5 ${
                              product.recommended
                                ? 'border-signal/35 bg-signal/10'
                                : 'border-[var(--line)] bg-white/50'
                            }`}
                          >
                            <h4 className="font-display text-base font-semibold text-ink sm:text-lg">
                              {product.name}
                              {product.recommended && (
                                <span className="ml-2 align-middle font-mono text-[9px] tracking-wider text-signal uppercase">
                                  Popular
                                </span>
                              )}
                            </h4>
                            <p className="mt-1.5 text-sm text-ink">{product.job}</p>
                            <p className="mt-0.5 text-sm text-ink-soft">{product.outcome}</p>
                            <ul className="mt-3 space-y-1.5">
                              {product.includes.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-ink-soft"
                                >
                                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              onClick={bookConsultation}
                              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:underline"
                            >
                              Get this product
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </article>
                        ))}

                        {line.id === 'content-engine' && (
                          <button
                            type="button"
                            onClick={scrollToEngine}
                            className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-ink hover:text-signal"
                          >
                            See the Content Engine in action
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Pricing is quoted from operating cost, build complexity, and maintenance—see{' '}
          <button
            type="button"
            onClick={() =>
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            className="font-semibold text-signal hover:underline"
          >
            Pricing
          </button>
          . Not sure which line fits?{' '}
          <button
            type="button"
            onClick={bookConsultation}
            className="font-semibold text-signal hover:underline"
          >
            Book a consult
          </button>
          .
        </p>
      </div>
    </ScrollSlide>
  )
}
