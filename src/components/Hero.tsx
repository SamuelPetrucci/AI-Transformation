'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { LogoMark } from './BrandLogo'
import { POSITIONING } from '@/config/positioning'
import { CALENDLY_CONFIG } from '@/config/calendly'

export default function Hero() {

  return (
    <ScrollSlide id="home" glow="top" className="pt-20">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]"
        >
          <LogoMark className="h-full w-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <LogoMark className="h-14 w-14 sm:h-16 sm:w-16" />
          <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {POSITIONING.shortName}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display relative z-10 text-xl font-medium tracking-tight text-zinc-200 sm:text-2xl md:text-3xl"
        >
          {POSITIONING.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {POSITIONING.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-10"
        >
          <a
            href={CALENDLY_CONFIG.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill"
          >
            Book Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-14 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {POSITIONING.pillars.map((pillar) => (
            <div key={pillar.id} className="text-center">
              <div className="font-display text-lg font-semibold text-violet-300 sm:text-xl">
                {pillar.title}
              </div>
              <div className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">
                {pillar.id === 'custom-software' && 'Builds & systems you own'}
                {pillar.id === 'ai-automation' && 'Agents that cut busywork'}
                {pillar.id === 'modern-tech' && 'Growth packages & upgrades'}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
