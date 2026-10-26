'use client'

import { motion } from 'framer-motion'
import { Shield, Home, DollarSign, Stethoscope, Scale, ShoppingCart } from 'lucide-react'

const industries = [
  {
    icon: Shield,
    name: 'Insurance Brokers',
    description: 'Automate claims processing and policy management',
  },
  {
    icon: Home,
    name: 'Real Estate Agents',
    description: 'Streamline property management and lead generation',
  },
  {
    icon: DollarSign,
    name: 'Accounting Firms',
    description: 'Automate bookkeeping and financial reporting',
  },
  {
    icon: Stethoscope,
    name: 'Medical Offices',
    description: 'Improve patient care and appointment scheduling',
  },
  {
    icon: Scale,
    name: 'Law Firms',
    description: 'Automate document review and case management',
  },
  {
    icon: ShoppingCart,
    name: 'Retail Businesses',
    description: 'Optimize inventory and customer service',
  },
]

export default function IndustriesHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[50vh] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="overline mb-4 text-violet-300"
          >
            Industries we serve
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            AI Solutions for Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base text-zinc-400 sm:text-lg"
          >
            We specialize in AI automation for insurance brokers, real estate agents, accounting
            firms, medical offices, law firms, and retail businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05 }}
              className="glass-panel group rounded-3xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform group-hover:scale-110">
                <industry.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-medium text-white">{industry.name}</h2>
              <p className="mt-2 text-sm text-zinc-400">{industry.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
