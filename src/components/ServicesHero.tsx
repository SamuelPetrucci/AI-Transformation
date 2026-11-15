'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function ServicesHero() {
  const scrollToServices = () => {
    document.getElementById('service-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero-bg.jpg"
          alt="Services background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-paper/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.28),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mb-5"
        >
          Our Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Products to grow, save time, and cut tech spend.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          Content Engine, AI Agents, Custom Software, and Training & Knowledge—
          clear products with outcomes, not a vague service menu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/#products" className="cta-pill">
            See products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal/40 hover:bg-signal/10"
          >
            Browse service areas
          </button>
        </motion.div>
      </div>
    </section>
  )
}
