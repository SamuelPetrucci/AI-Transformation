'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Search, Sparkles, ShieldCheck, Megaphone } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const teaserSteps = [
  { icon: Search, label: 'Train' },
  { icon: Sparkles, label: 'Script' },
  { icon: ShieldCheck, label: 'Approve' },
  { icon: Megaphone, label: 'Post' },
]

/** Homepage teaser — full SocialContentEngine demo lives on /content-engine */
export default function SocialAdsPackage() {
  return (
    <ScrollSlide id="content-engine-teaser" glow="none" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Content Engine
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Social content with a human gate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-base text-ink-soft"
          >
            Train → script → human-approve → post anywhere. Open the dedicated page for the live
            walkthrough; pricing stays on Products.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {teaserSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-3 py-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <step.icon className="h-3.5 w-3.5" />
                </span>
                <span className="font-display text-sm font-semibold text-ink">{step.label}</span>
              </div>
              {i < teaserSteps.length - 1 && (
                <span className="hidden text-signal/40 sm:inline" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/content-engine" className="cta-pill">
            Open Content Engine demo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/products#content-engine" className="btn-ghost">
            See pricing
          </Link>
        </div>
      </div>
    </ScrollSlide>
  )
}
