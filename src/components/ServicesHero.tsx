'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function ServicesHero() {
  const scrollToServices = () => {
    document.getElementById('service-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero-bg.webp"
          alt="Services background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-violet-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Our Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Custom software. AI automation. Modern tech.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          AI Transformation LLC helps businesses save time, reduce costs, and grow—whether that starts
          as a $149/mo social package, an AI receptionist, a custom software project, or a larger
          technology implementation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button type="button" onClick={scrollToServices} className="cta-pill">
            Explore services
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-violet-500/10"
          >
            See agent orchestration
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
