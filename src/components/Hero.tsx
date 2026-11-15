'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { LogoMark } from './BrandLogo'
import { TypeLine } from './TypeLine'
import { POSITIONING } from '@/config/positioning'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { getSmsConsultHref } from '@/config/contact'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <ScrollSlide id="home" glow="none" className="pt-20">
      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="mesh absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="grid-fade pointer-events-none absolute inset-0 -z-10 opacity-70"
        />

        <motion.div {...rise(0.05)} className="relative z-10 mb-5 flex items-center gap-3.5">
          <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
            {POSITIONING.shortName}
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.12)}
          className="font-display relative z-10 max-w-4xl text-[clamp(2.4rem,7vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink"
        >
          {POSITIONING.headline}
        </motion.h1>

        <motion.p
          {...rise(0.22)}
          className="relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          {POSITIONING.support}
        </motion.p>

        <motion.p
          {...rise(0.28)}
          className="relative z-10 mt-4 font-display text-xl font-semibold sm:text-2xl"
        >
          We build <TypeLine />
        </motion.p>

        <motion.div
          {...rise(0.38)}
          className="relative z-10 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={CALENDLY_CONFIG.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="/services" className="btn-ghost">
            Explore Services
          </a>
          <a href={getSmsConsultHref()} className="btn-ghost">
            Text my number for contact
          </a>
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
