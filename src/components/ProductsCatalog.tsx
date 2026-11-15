'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Clock, PiggyBank, TrendingUp, Wrench } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { PRODUCT_LINES, type ProductLine } from '@/config/products'

const goalMeta: Record<
  ProductLine['goal'],
  { label: string; icon: typeof TrendingUp }
> = {
  grow: { label: 'Grow', icon: TrendingUp },
  'save-time': { label: 'Save time', icon: Clock },
  'save-money': { label: 'Save money', icon: PiggyBank },
  'own-stack': { label: 'Own your stack', icon: Wrench },
}

export default function ProductsCatalog() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToContent = () => {
    document.getElementById('social-ads')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="products" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Clear products. Real outcomes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Everything we sell is a product a business owner can buy—to grow, save time, cut tech
            spend, or own more of the stack. Pick a line, then book a consult to configure it.
          </motion.p>
        </div>

        <div className="space-y-14">
          {PRODUCT_LINES.map((line, lineIndex) => {
            const meta = goalMeta[line.goal]
            const GoalIcon = meta.icon
            return (
              <motion.section
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: lineIndex * 0.04 }}
              >
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div className="max-w-2xl">
                    <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                      <GoalIcon className="h-3.5 w-3.5" />
                      {meta.label}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                      {line.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {line.blurb}
                    </p>
                  </div>
                  {line.id === 'content-engine' && (
                    <button
                      type="button"
                      onClick={scrollToContent}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:underline"
                    >
                      How the engine works
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {line.products.map((product) => (
                    <article
                      key={product.id}
                      className={`flex flex-col rounded-2xl border px-5 py-5 backdrop-blur-sm ${
                        product.recommended
                          ? 'border-signal/40 bg-gradient-to-b from-signal/15 to-white/55'
                          : 'border-[var(--line)] bg-white/55'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-lg font-semibold text-ink">
                          {product.name}
                        </h4>
                        {product.recommended && (
                          <span className="shrink-0 rounded-full bg-signal px-2 py-0.5 text-[9px] font-semibold tracking-wider text-paper uppercase">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-medium text-ink">{product.job}</p>
                      <p className="mt-1 text-sm text-ink-soft">{product.outcome}</p>
                      <p className="mt-4 font-display text-xl font-semibold text-signal">
                        {product.price.amount}
                      </p>
                      {product.price.note && (
                        <p className="mt-0.5 text-xs text-ink-soft/70">{product.price.note}</p>
                      )}
                      <ul className="mt-4 flex-1 space-y-2">
                        {product.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={scrollToBooking}
                        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                          product.recommended
                            ? 'cta-pill w-full justify-center'
                            : 'w-full border border-[var(--line)] text-ink hover:border-signal/50 hover:bg-signal/10'
                        }`}
                      >
                        Get this product
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </article>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        <p className="mt-12 text-center text-sm text-ink-soft">
          Not sure where to start? Book a consult—we match the product to the outcome you need:{' '}
          {PRODUCT_LINES.map((l) => l.name).join(' · ')}.
        </p>
      </div>
    </ScrollSlide>
  )
}
