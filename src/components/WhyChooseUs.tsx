'use client'

import { motion } from 'framer-motion'
import { Award, Clock, MessageSquare, Zap } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const reasons = [
  {
    icon: Zap,
    title: 'Go-to-market speed',
    description:
      'App ideas, products, and in-house applications—built and launched so people instantly get how the tech brings them to life.',
  },
  {
    icon: Award,
    title: 'Production-grade security',
    description:
      'User authentication, role-based access, biometrics and passkeys, and secure storage for sensitive data—built in, not bolted on.',
  },
  {
    icon: Clock,
    title: 'Manage for maximum uptime',
    description:
      'After launch we manage and help maintain your app or service—monitoring and care aimed at keeping it available.',
  },
  {
    icon: MessageSquare,
    title: 'Partner, not a handoff',
    description:
      'Clear products and transparent quotes—then ongoing partnership so your stack stays reliable as you grow.',
  },
]

export default function WhyChooseUs() {
  return (
    <ScrollSlide id="why-us" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="overline mb-4"
          >
            Our difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.04 }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-base text-ink-soft sm:text-lg"
          >
            Your go-to-market technology partner—from concept to launch, then managed for uptime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel group rounded-3xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/15 text-signal transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-3 text-xl font-medium text-ink">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
