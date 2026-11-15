'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Search, Sparkles, ShieldCheck, Megaphone } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import SocialContentEngine from './SocialContentEngine'

const engineSteps = [
  {
    icon: Search,
    title: 'Train on your business',
    detail: 'Offers, audience, logos, and voice—so drafts sound like you.',
  },
  {
    icon: Sparkles,
    title: 'Plan scripts',
    detail: 'Hooks and SEO-minded outlines for the platforms you use.',
  },
  {
    icon: ShieldCheck,
    title: 'Human approval',
    detail: 'Every draft gets a yes before publish—checks and balances.',
  },
  {
    icon: Megaphone,
    title: 'Post + advertise',
    detail: 'Any channels you choose. Ads from past content—or a new plan.',
  },
]

export default function SocialAdsPackage() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="social-ads" glow="none" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
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
            How one product line works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-base text-ink-soft"
          >
            Train → script → human-approve → post anywhere. Pricing lives in Products above—this is
            the walkthrough.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <SocialContentEngine />
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engineSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-[var(--line)] bg-white/55 px-4 py-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal">
                <step.icon className="h-4 w-4" />
              </span>
              <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                0{index + 1}
              </p>
              <h3 className="font-display mt-1 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{step.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={scrollToProducts} className="btn-ghost">
            Back to products
          </button>
          <button type="button" onClick={scrollToBooking} className="cta-pill">
            Get Content Engine
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ScrollSlide>
  )
}
