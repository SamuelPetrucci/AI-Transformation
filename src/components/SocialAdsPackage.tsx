'use client'

import { motion } from 'framer-motion'
import {
  Megaphone,
  Share2,
  Target,
  BarChart3,
  Clapperboard,
  Sparkles,
  Check,
  ArrowUpRight,
} from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const inclusions = [
  {
    icon: Share2,
    title: 'Social content system',
    detail: 'Brand-aligned posts, carousels, and short-form scripts across LinkedIn, Instagram, and X.',
  },
  {
    icon: Megaphone,
    title: 'Paid advertising',
    detail: 'Meta & Google campaign builds, audience testing, creative variants, and weekly optimization.',
  },
  {
    icon: Target,
    title: 'Funnel & retargeting',
    detail: 'Landing theme + pixel wiring so cold traffic converts and warm leads re-engage.',
  },
  {
    icon: Clapperboard,
    title: 'Creative production',
    detail: 'Ad creatives, motion bumpers, and AI-assisted asset packs matched to your theme.',
  },
  {
    icon: BarChart3,
    title: 'Performance reporting',
    detail: 'Clear dashboards for CAC, ROAS, CTR, and pipeline influence—shared every sprint.',
  },
  {
    icon: Sparkles,
    title: 'AI growth assist',
    detail: 'Audience insights, copy testing, and bid suggestions powered by our automation stack.',
  },
]

const packageTiers = [
  {
    name: 'Launch',
    price: 'From $2.5k / mo',
    items: ['2 platforms', '8 creatives / mo', 'Basic retargeting', 'Monthly report'],
  },
  {
    name: 'Growth',
    price: 'From $5k / mo',
    highlight: true,
    items: [
      '3–4 platforms',
      '16+ creatives / mo',
      'Full funnel + A/B tests',
      'Bi-weekly optimization',
      'Theme-matched landing',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    items: [
      'Always-on media',
      'Creative studio access',
      'CRM / attribution hooks',
      'Dedicated strategist',
    ],
  },
]

export default function SocialAdsPackage() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="social-ads" glow="right" className="scroll-slide--compact py-12 lg:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Growth Package
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Social Media & Advertising Package
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            Pair your theme and AI stack with a full-funnel content and paid media engine designed
            to fill your pipeline—not just vanity metrics.
          </motion.p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="glass-panel rounded-2xl p-4 sm:p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <item.icon className="h-4 w-4" />
              </div>
              <h3 className="mb-1.5 font-display text-base font-medium text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {packageTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-5 ${
                tier.highlight
                  ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/20 to-[#0a0a0c] shadow-[0_0_60px_rgba(139,92,246,0.2)]'
                  : 'border-white/8 bg-[#0a0a0c]'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-violet-300">{tier.price}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {tier.items.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    {line}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToBooking}
                className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  tier.highlight
                    ? 'cta-pill w-full justify-center'
                    : 'w-full border border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10'
                }`}
              >
                Book package consult
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
