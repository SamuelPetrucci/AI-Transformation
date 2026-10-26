'use client'

import { motion } from 'framer-motion'
import { Code2, Bot, Cpu, ArrowRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { POSITIONING } from '@/config/positioning'

const icons = [Code2, Bot, Cpu]

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
            How we help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            One company. Three ways we deliver.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            {POSITIONING.statement}
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {POSITIONING.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel group rounded-3xl p-6 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mb-3 text-xl font-medium text-white md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                  {pillar.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </ScrollSlide>
  )
}
