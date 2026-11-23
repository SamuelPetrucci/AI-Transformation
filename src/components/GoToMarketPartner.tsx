'use client'

import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Wrench, Activity } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { POSITIONING } from '@/config/positioning'

const icons = [Rocket, ShieldCheck, Wrench, Activity]

export default function GoToMarketPartner() {
  return (
    <ScrollSlide id="gtm-partner" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            {POSITIONING.role}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            We bring it to life—and keep it live.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            {POSITIONING.shortSupport}
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {POSITIONING.capabilities.map((item, index) => {
            const Icon = icons[index] ?? Rocket
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-panel rounded-3xl p-6 sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-signal/15 text-signal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </ScrollSlide>
  )
}
