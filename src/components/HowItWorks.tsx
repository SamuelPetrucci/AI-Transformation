'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollSlide from './ScrollSlide'

const steps = [
  {
    title: 'Discovery & Assessment',
    description:
      'We map where you lose time and money—then match the right mix of software, automation, and modern tech.',
    image: '/images/discovery.jpg',
  },
  {
    title: 'Strategy & Planning',
    description:
      'Match you to a product—Content Engine, AI Workforce, Custom Software, or Save on Tech—with clear ROI.',
    image: '/images/strategy.jpg',
  },
  {
    title: 'Implementation & Training',
    description: 'Ship the software, agents, or packages—and train your team so it sticks.',
    image: '/images/implementation.jpg',
  },
  {
    title: 'Optimization & Support',
    description:
      'Continuous monitoring, optimization, and ongoing support to ensure maximum ROI.',
    image: '/images/optimization.jpg',
  },
]

export default function HowItWorks() {
  return (
    <ScrollSlide id="how-it-works" glow="none" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Our process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-4 max-w-2xl text-base text-ink-soft sm:text-lg"
          >
            Same process whether you buy Content Engine Starter, an AI Receptionist, a Stack Rebuild,
            or a Custom CRM.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel group overflow-hidden rounded-3xl"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-paper">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display mb-2 text-lg font-medium text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
