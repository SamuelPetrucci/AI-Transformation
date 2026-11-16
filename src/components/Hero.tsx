'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { LogoMark } from './BrandLogo'
import { TypeLine } from './TypeLine'
import { POSITIONING } from '@/config/positioning'
import { getSmsConsultHref } from '@/config/contact'
import CalendlyButton from './CalendlyButton'

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
    <section
      id="home"
      className="scroll-slide relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/services-hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-paper/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,58,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start px-4 sm:px-6 lg:px-8">
        <motion.div {...rise(0.05)} className="mb-5 flex items-center gap-3.5">
          <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
            {POSITIONING.shortName}
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.12)}
          className="font-display max-w-4xl text-[clamp(2.4rem,7vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink"
        >
          {POSITIONING.headline}
        </motion.h1>

        <motion.p
          {...rise(0.22)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          {POSITIONING.support}
        </motion.p>

        <motion.p
          {...rise(0.28)}
          className="mt-4 font-display text-xl font-semibold sm:text-2xl"
        >
          We build <TypeLine />
        </motion.p>

        <motion.div
          {...rise(0.38)}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <CalendlyButton className="btn-primary">
            Book Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </CalendlyButton>
          <a href="#products" className="btn-ghost">
            See products
          </a>
          <a href={getSmsConsultHref()} className="btn-ghost">
            Send a text
          </a>
        </motion.div>
      </div>
    </section>
  )
}
