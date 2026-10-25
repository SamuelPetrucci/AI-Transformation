'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="home" glow="top" className="pt-20">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Large watermark logo mark */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        >
          <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
            <rect x="18" y="28" width="52" height="52" rx="14" stroke="white" strokeWidth="6" />
            <rect x="50" y="40" width="52" height="52" rx="14" stroke="white" strokeWidth="6" />
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="overline relative z-10 mb-6 text-accent-soft"
        >
          AI · Automation · Growth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-display relative z-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
        >
          Talent-Grade AI Solutions for Elite Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          We connect U.S. companies with production-ready AI systems, custom landing themes,
          automation, and paid growth packages—accelerating innovation, eliminating delays, and
          maximizing ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="relative z-10 mt-10"
        >
          <button type="button" onClick={scrollToBooking} className="cta-pill">
            Schedule call
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
