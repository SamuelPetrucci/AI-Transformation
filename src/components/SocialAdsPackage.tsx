'use client'

import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import SocialContentEngine from './SocialContentEngine'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <SocialContentEngine />
        </motion.div>

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Start with social
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            One easy entry. Same bridge.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Social packages from $149 keep you visible while we bridge the rest—web, agents, and
            training—so you stay focused on the business.
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
                  ? 'border-signal/40 bg-gradient-to-b from-signal/20 to-paper shadow-[0_0_50px_rgba(15,143,117,0.14)]'
                  : 'border-[var(--line)] bg-white/55'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signal px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-paper">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-signal">
                  {tier.price}
                </span>
                <span className="text-sm text-ink-soft/70">{tier.period}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.items.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
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
                    : 'w-full border border-[var(--line)] text-ink hover:border-signal/50 hover:bg-signal/10'
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
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            What the $499 advertising package can look like
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
            For example, an HVAC company could pay a management fee plus a separate advertising
            budget. AI Transformation handles content, campaign setup, and management, while the ad
            budget goes toward showing ads to potential customers.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
              <p className="text-xs uppercase tracking-wider text-ink-soft/70">Management fee</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$499/mo</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
              <p className="text-xs uppercase tracking-wider text-ink-soft/70">
                Example Facebook ad budget
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$300/mo</p>
            </div>
            <div className="rounded-2xl border border-signal/30 bg-signal/10 p-4">
              <p className="text-xs uppercase tracking-wider text-signal">
                Total monthly customer cost
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$799</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-soft/70">
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
          <h3 className="font-display text-center text-xl font-semibold text-ink sm:text-2xl">
            Optional AI automation services
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink-soft">
            Separate from the social media packages—available as add-ons or standalone engagements.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--line)]">
            <div className="grid grid-cols-[1.4fr_1fr] border-b border-[var(--line)] bg-white/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-soft/70 sm:px-6">
              <span>Service</span>
              <span>Proposed pricing</span>
            </div>
            {optionalServices.map((row) => (
              <div
                key={row.service}
                className="grid grid-cols-[1.4fr_1fr] border-b border-[var(--line)] px-4 py-4 text-sm last:border-b-0 sm:px-6"
              >
                <span className="pr-3 text-ink-soft">{row.service}</span>
                <span className="text-signal">{row.pricing}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
