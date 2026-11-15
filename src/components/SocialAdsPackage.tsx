'use client'

import { motion } from 'framer-motion'
import {
  Check,
  ArrowUpRight,
  Search,
  Sparkles,
  CalendarClock,
  Megaphone,
  PiggyBank,
  Clock,
  TrendingUp,
} from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import SocialContentEngine from './SocialContentEngine'

const engineSteps = [
  {
    icon: Search,
    title: 'Market research from your business',
    detail:
      'The agent learns what you sell, who you serve, your logos/brand assets, and what already works—so content isn’t generic.',
  },
  {
    icon: Sparkles,
    title: 'Scripts planned for you',
    detail:
      'Hooks, captions, and SEO-minded outlines get planned against your offers and keywords—ready for approval, not blank-page busywork.',
  },
  {
    icon: CalendarClock,
    title: 'Automated posting configured',
    detail:
      'We wire scheduling to your accounts so the calendar fills itself. You approve; the engine keeps posting while you run the business.',
  },
  {
    icon: Megaphone,
    title: 'Ads from past content—or a new plan',
    detail:
      'Have history? We mine winning posts into product ads. Starting fresh? We design a new approach so paid and organic work together.',
  },
]

const packages = [
  {
    name: 'Content Engine Starter',
    price: '$149',
    period: '/month',
    blurb:
      'Automated posting for one platform—research + scripts included—so you stay visible without hiring a marketer.',
    items: [
      'Business + brand research (offers, logos, voice)',
      '8 SEO-minded posts planned and scheduled / month',
      'AI-assisted captions and graphics',
      'One platform (Facebook or Instagram)',
      'One revision round per monthly batch',
    ],
  },
  {
    name: 'Content Engine Growth',
    price: '$299',
    period: '/month',
    highlight: true,
    badge: 'Recommended',
    blurb:
      'Full content engine on Facebook + Instagram—calendar, scripts, and reporting so organic traffic compounds.',
    items: [
      'Ongoing market research from your business data',
      '12 posts / month across Facebook and Instagram',
      'Script planning + monthly content calendar',
      'AI-assisted captions and graphics',
      'Basic monthly performance report',
    ],
  },
  {
    name: 'Content Engine + Product Ads',
    price: '$499',
    period: '/month',
    blurb:
      'Content engine plus managed product advertising—reuse past winners or launch a new ads approach.',
    items: [
      'Everything in Growth',
      'Management of one Meta product ad campaign',
      'Creative pulled from past content when available',
      'Or a new ads plan if you’re starting fresh',
      'Lead tracking + monthly ads report',
      'Ad spend paid separately by you',
    ],
  },
]

const outcomes = [
  {
    icon: Clock,
    title: 'Save time',
    detail: 'No more weekly Canva marathons—approve scripts, then get back to customers.',
  },
  {
    icon: TrendingUp,
    title: 'Grow with automation',
    detail: 'Consistent posting + SEO-minded content + ads that keep demand warm.',
  },
  {
    icon: PiggyBank,
    title: 'Spend smarter on tech',
    detail: 'One engine instead of stacking freelancers, tools, and unused SaaS seats.',
  },
]

const optionalServices = [
  { service: 'AI automation monitoring and maintenance', pricing: '$99–$299/month' },
  { service: 'AI receptionist implementation', pricing: 'Custom setup quote' },
  { service: 'Automated lead follow-up system', pricing: 'Custom setup quote' },
  { service: 'Website or CRM integration', pricing: 'Custom project quote' },
  { service: 'Custom AI agents and ops software', pricing: 'Custom project quote' },
  { service: 'Save-on-tech stack rebuild (own vs rent)', pricing: 'Custom project quote' },
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

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            How the content engine works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Research → scripts → posting → ads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Specific products a business owner can buy to grow with automation—save time on marketing
            busywork, and spend less stacking tools when a configured engine will do.
          </motion.p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-3 md:grid-cols-2">
          {engineSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="project-row flex gap-4 rounded-2xl border border-[var(--line)] bg-white/55 px-5 py-5 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <step.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-[var(--line)] bg-white/55 px-5 py-5 backdrop-blur-sm"
            >
              <o.icon className="h-5 w-5 text-signal" />
              <h3 className="font-display mt-3 text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{o.detail}</p>
            </div>
          ))}
        </div>

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
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Pick the engine. We configure it.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Clear monthly products—from automated posting to product ads—priced so owners can start
            lean and scale. Layer on custom software, agents, and Save-on-tech rebuilds when you want
            to own more of the stack.
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
                <span className="font-display text-3xl font-semibold text-signal">{tier.price}</span>
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
          className="mt-10 rounded-3xl border border-[var(--line)] bg-white/40 p-6 sm:p-8"
        >
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            What Content Engine + Product Ads can look like
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Example: an HVAC company pays the management fee plus ad spend. The engine researches
            their services and brand, plans scripts, auto-posts, then turns strong past posts into
            product ads—or launches a new ads plan if history is thin.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
              <p className="text-xs uppercase tracking-wider text-ink-soft/70">Management fee</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$499/mo</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-4">
              <p className="text-xs uppercase tracking-wider text-ink-soft/70">
                Ad spend (client-paid)
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$300/mo</p>
            </div>
            <div className="rounded-2xl border border-signal/30 bg-signal/10 p-4">
              <p className="text-xs uppercase tracking-wider text-signal">Total cash out</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">$799</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-soft/70">
            You keep the audiences and creative history—we configure the engine, not a black-box
            agency retainer.
          </p>
        </motion.div>

        {/* Optional add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="font-display text-center text-xl font-semibold text-ink sm:text-2xl">
            Pair with software, agents, and Save-on-tech
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink-soft">
            Content engines grow demand. Custom software, AI agents, and stack rebuilds help you
            capture it—and cut what you rent.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--line)]">
            <div className="grid grid-cols-[1.4fr_1fr] border-b border-[var(--line)] bg-white/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-soft/70 sm:px-6">
              <span>Service</span>
              <span>Pricing</span>
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
