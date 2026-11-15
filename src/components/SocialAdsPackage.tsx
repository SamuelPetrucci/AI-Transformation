'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Database,
  Sparkles,
  PenLine,
  ShieldCheck,
  CalendarClock,
} from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import SocialContentEngine from './SocialContentEngine'
import { PLATFORMS } from '@/components/PlatformLogos'

const engineSteps = [
  {
    icon: Database,
    title: 'Your data & brand',
    detail: 'Products, logos, offers, and voice—so every draft sounds like you.',
  },
  {
    icon: Sparkles,
    title: 'AI script idea',
    detail: 'Hooks and outlines generated from your company data.',
  },
  {
    icon: PenLine,
    title: 'Create content',
    detail: 'Platform-native creatives and fake-ad-ready posts.',
  },
  {
    icon: ShieldCheck,
    title: 'Iterate & approve',
    detail: 'Human gate—tweak, revise, then yes before anything ships.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule everywhere',
    detail: 'Consistent branding across Instagram, Facebook, LinkedIn, X, TikTok, YouTube.',
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
            Content Engines
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Your data → approved content → every platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-base text-ink-soft"
          >
            Watch a product brand move through the engine: AI drafts, you approve, then scheduled
            posts land with real platform logos—consistent branding without a full-time studio.
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

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {PLATFORMS.map(({ id, name, Logo, color }) => (
            <span
              key={id}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-soft"
            >
              <Logo className="h-3.5 w-3.5" style={{ color }} />
              {name}
            </span>
          ))}
        </div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
            Get Content Engines
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ScrollSlide>
  )
}
