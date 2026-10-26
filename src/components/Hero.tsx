'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import { LogoMark } from './BrandLogo'

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
            Transformation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display relative z-10 text-xl font-medium tracking-tight text-zinc-200 sm:text-2xl md:text-3xl"
        >
          Transform Your Business with Intelligent AI Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          We specialize in cutting-edge AI solutions that drive business growth and operational
          efficiency. From intelligent automation to data analytics, we help businesses leverage the
          power of artificial intelligence to stay ahead in today&apos;s competitive landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-10"
        >
          <button type="button" onClick={scrollToBooking} className="cta-pill">
            Book Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-14 grid w-full max-w-3xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {[
            { value: 'Reliable', label: 'Development Partner' },
            { value: 'Fast', label: 'Turnaround Time' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="font-display text-2xl font-semibold text-violet-300 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </ScrollSlide>
  )
}
