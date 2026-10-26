'use client'

import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const packages = [
  {
    name: 'Starter Social',
    price: '$149',
    period: '/month',
    blurb: 'For businesses that want an active social media presence without doing the posting themselves.',
    items: [
      '8 social media posts per month',
      'AI-assisted captions and graphics',
      'Scheduling to one platform (Facebook or Instagram)',
      'One round of revisions per monthly content batch',
    ],
  },
  {
    name: 'Social Growth',
    price: '$299',
    period: '/month',
    highlight: true,
    badge: 'Recommended',
    blurb: 'For businesses wanting consistent marketing on Facebook and Instagram.',
    items: [
      '12 social media posts per month',
      'Facebook and Instagram scheduling',
      'Monthly content calendar',
      'AI-assisted captions and graphics',
      'Basic monthly performance report',
    ],
  },
  {
    name: 'Facebook Ads + Social',
    price: '$499',
    period: '/month',
    blurb: 'For businesses wanting social media management plus paid advertising.',
    items: [
      '12 social media posts per month',
      'Facebook and Instagram scheduling',
      'Management of one Meta advertising campaign',
      'Basic lead tracking',
      'Monthly advertising performance report',
      'Client pays Facebook/Instagram ad spend separately',
    ],
  },
]

const optionalServices = [
  { service: 'AI automation monitoring and maintenance', pricing: '$99–$299/month' },
  { service: 'AI receptionist implementation', pricing: 'Custom setup quote' },
  { service: 'Automated lead follow-up system', pricing: 'Custom setup quote' },
  { service: 'Website or CRM integration', pricing: 'Custom project quote' },
  { service: 'Custom AI agents and software', pricing: 'Custom project quote' },
]

export default function SocialAdsPackage() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="social-ads" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Growth packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Social & ads — one way we help you grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            Under the same umbrella as custom software and AI automation: clear monthly plans from
            $149—so marketing stays consistent while we build the bigger tech that saves you time
            and cost.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl border p-6 ${
                tier.highlight
                  ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/20 to-[#0a0a0c] shadow-[0_0_50px_rgba(139,92,246,0.18)]'
                  : 'border-white/8 bg-[#0a0a0c]'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-violet-300">
                  {tier.price}
                </span>
                <span className="text-sm text-zinc-500">{tier.period}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tier.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
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
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  tier.highlight
                    ? 'cta-pill w-full justify-center'
                    : 'w-full border border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10'
                }`}
              >
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>

        {/* $499 example */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass-panel mt-10 rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            What the $499 advertising package can look like
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            For example, an HVAC company could pay a management fee plus a separate advertising
            budget. AI Transformation handles content, campaign setup, and management, while the ad
            budget goes toward showing ads to potential customers.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">Management fee</p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">$499/mo</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Example Facebook ad budget
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">$300/mo</p>
            </div>
            <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4">
              <p className="text-xs uppercase tracking-wider text-violet-300">
                Total monthly customer cost
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">$799</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            The $300 ad budget is an illustration, not a required minimum. Advertising results are
            not guaranteed. Client pays Facebook/Instagram ad spend separately.
          </p>
        </motion.div>

        {/* Optional AI automation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-10"
        >
          <h3 className="font-display text-center text-xl font-semibold text-white sm:text-2xl">
            Optional AI automation services
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-400">
            Separate from the social media packages—available as add-ons or standalone engagements.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/8">
            <div className="grid grid-cols-[1.4fr_1fr] border-b border-white/8 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:px-6">
              <span>Service</span>
              <span>Proposed pricing</span>
            </div>
            {optionalServices.map((row) => (
              <div
                key={row.service}
                className="grid grid-cols-[1.4fr_1fr] border-b border-white/5 px-4 py-4 text-sm last:border-b-0 sm:px-6"
              >
                <span className="pr-3 text-zinc-300">{row.service}</span>
                <span className="text-violet-300">{row.pricing}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
