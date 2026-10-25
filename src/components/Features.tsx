'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Shield, ArrowRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const features = [
  {
    icon: Brain,
    title: 'Custom Development & AI Integration',
    description:
      'Custom landing pages with AI integration, POS systems, and development partnerships that bridge the gap between idea and solution.',
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
      'Comprehensive data analytics, consolidation through advanced dashboards, and actionable business insights.',
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Core Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            From custom landing pages with AI integration to comprehensive development partnerships,
            we bring ideas to impactful solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => {
                window.location.href = '/services'
              }}
              className="cta-pill mx-auto"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel group rounded-3xl p-6 transition-colors duration-300 hover:border-violet-400/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-3 text-lg font-medium text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
