'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollSlide from './ScrollSlide'

const steps = [
  {
    title: 'Discovery & Assessment',
    description:
      'We analyze your current business processes and identify opportunities for AI, themes, and growth.',
    image: '/images/discovery.webp',
  },
  {
    title: 'Strategy & Planning',
    description:
      'Develop a comprehensive strategy tailored to your goals—product, brand system, and acquisition.',
    image: '/images/strategy.avif',
  },
  {
    title: 'Implementation & Training',
    description: 'Deploy solutions and provide training so your team can operate with confidence.',
    image: '/images/implementation.webp',
  },
  {
    title: 'Optimization & Support',
    description:
      'Continuous monitoring, creative testing, and support to ensure maximum ROI over time.',
    image: '/images/optimization.webp',
  },
]

export default function HowItWorks() {
  return (
    <ScrollSlide id="how-it-works" glow="none" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            A process that feels like progress.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            From concept to campaigns—structured delivery with slideshow-clear milestones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display mb-2 text-lg font-medium text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
