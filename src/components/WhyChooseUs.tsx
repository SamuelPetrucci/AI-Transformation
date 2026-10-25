'use client'

import { motion } from 'framer-motion'
import { Award, Clock, MessageSquare, Zap } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const reasons = [
  {
    icon: Award,
    title: 'Expert Team',
    description:
      'Certified technology professionals with proven solutions for enterprise transformation.',
  },
  {
    icon: MessageSquare,
    title: 'Tailored SMB Solutions',
    description:
      'We consult closely with small and medium businesses to create custom solutions that fit your unique needs and budget.',
  },
  {
    icon: Clock,
    title: 'Continuous Support',
    description:
      'Ongoing improvement and support to ensure your tech operations run smoothly and efficiently.',
  },
  {
    icon: Zap,
    title: 'Tech Operations Made Easy',
    description:
      'We make navigating complex tech operations a breeze, so you can focus on growing your business.',
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
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            We combine cutting-edge technology with proven expertise to deliver exceptional results.
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-3 text-xl font-medium text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
