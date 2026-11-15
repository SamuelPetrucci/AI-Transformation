'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Clock,
  PiggyBank,
  TrendingUp,
  Wrench,
} from 'lucide-react'
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

/** Homepage teaser — full catalog + diagrams live on /products */
export default function ProductsCatalog() {
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
            Each line has a systems diagram and clear packages. Explore offers on their own page—
            not dumped into this scroll.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_LINES.map((line, index) => {
            const meta = goalMeta[line.goal]
            const GoalIcon = meta.icon
            return (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  href={`/products#${line.id}`}
                  className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white/50 px-5 py-5 transition hover:border-signal/35 hover:bg-white/70"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <GoalIcon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                    {meta.label}
                  </span>
                  <h3 className="font-display mt-1 text-lg font-semibold text-ink">{line.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-3">
                    {line.blurb}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal">
                    View diagram
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/products" className="cta-pill">
            Explore product offers
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/content-engine" className="btn-ghost">
            Content Engine demo
          </Link>
        </div>
      </div>
    </ScrollSlide>
  )
}
