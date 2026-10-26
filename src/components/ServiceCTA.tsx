'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          Ready to save time, cut costs, and grow?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-zinc-400"
        >
          Tell us what you need—social growth, an AI receptionist, custom software, or a larger tech
          build. Same company. Right-sized engagement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel mt-10 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Book a free discovery call
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            We&apos;ll map the fastest path to results under custom software, AI automation, or modern
            technology solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#booking" className="cta-pill">
              Book free consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#social-ads"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              See the social engine
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
