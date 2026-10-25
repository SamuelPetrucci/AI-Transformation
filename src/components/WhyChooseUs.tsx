'use client'

import { motion } from 'framer-motion'
import ScrollSlide from './ScrollSlide'

const pillars = [
  {
    title: 'Elite Talent, Guaranteed',
    description: 'Senior AI engineers and strategists who ship production systems—not prototypes.',
  },
  {
    title: '48-Hour Turnaround',
    description: 'Rapid scoping, theme previews, and first deliverables so momentum never stalls.',
  },
  {
    title: 'Expertise Into Measurable ROI',
    description: 'Every build ties to conversion, automation hours saved, or paid acquisition lift.',
  },
]

export default function WhyChooseUs() {
  return (
    <ScrollSlide id="why-us" glow="right" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="overline mb-4"
          >
            Why Choose AI Transformation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Smart Hires. Innovate Faster.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            Discover how we solve hiring and delivery challenges with speed, precision, and
            unparalleled quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-3xl border border-white/8 bg-[#0a0a0c]"
            >
              <div className="ribbed-glow absolute inset-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent opacity-80" />
              <div className="relative mt-auto p-6 sm:p-7">
                <h3 className="overline mb-3 text-left text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSlide>
  )
}
