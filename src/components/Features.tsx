'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Shield, ArrowRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const features = [
  {
    icon: Brain,
    title: 'Custom Development & AI Integration',
    description:
      'Custom landing themes with AI integration, POS systems, and development partnerships that bridge idea to production.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Business Solutions',
    description:
      'AI receptionists, research assistants, automated reporting, and intelligent project management systems.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Dashboarding',
    description:
      'Comprehensive analytics, consolidation through advanced dashboards, and actionable business insights.',
  },
  {
    icon: Shield,
    title: 'Knowledge Base & Consulting',
    description:
      'Expert knowledge base consulting, solution implementation, and ongoing support to ensure your success.',
  },
]

export default function Features() {
  return (
    <ScrollSlide id="features" glow="none" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            From theme to intelligent ops.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            Custom landing pages, AI systems, analytics, and partnerships that turn concepts into
            impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => {
                window.location.href = '/services'
              }}
              className="cta-pill mx-auto"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel group rounded-3xl p-6 transition-colors duration-300 hover:border-violet-400/30 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-3 text-xl font-medium text-white">{feature.title}</h3>
              <p className="leading-relaxed text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
