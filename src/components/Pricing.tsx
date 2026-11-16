'use client'

import { motion } from 'framer-motion'
import { Cpu, Wrench, ShieldCheck, Receipt } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import CalendlyButton from './CalendlyButton'

const factors = [
  {
    icon: Cpu,
    title: 'System operating cost',
    description:
      'Hosting, APIs, models, and the infrastructure your system needs to stay online—priced to what it actually runs on.',
  },
  {
    icon: Wrench,
    title: 'Development complexity',
    description:
      'Scope, integrations, and how much custom build is required. Simpler systems cost less to ship; complex ones are quoted accordingly.',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance overhead',
    description:
      'Monitoring, updates, fixes, and ongoing care so the system stays reliable after launch—not a surprise add-on later.',
  },
]

export default function Pricing() {
  return (
    <ScrollSlide id="pricing" glow="top" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Simple. Transparent. Broken down to the penny.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Every engagement is quoted from three things—not a generic package sticker. You see
            exactly what you&apos;re paying for.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {factors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-panel rounded-3xl p-6 sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-signal/15 text-signal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{factor.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{factor.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel mx-auto mt-8 max-w-5xl rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-signal/15 text-signal">
              <Receipt className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-xl font-semibold text-ink">
                Transparent invoices, every time
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                All invoices are billed in a transparent manner. Everything you&apos;re charged for
                is itemized and broken down to the penny—so there are no mystery fees and no
                rounded-off black boxes.
              </p>
              <CalendlyButton className="cta-pill mt-6">
                Get a transparent quote
              </CalendlyButton>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
