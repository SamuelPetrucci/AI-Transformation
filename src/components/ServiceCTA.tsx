'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="band-ink rounded-[2rem] px-8 py-12 text-center sm:px-12 sm:py-14"
        >
          <p className="section-label mb-4 !text-signal-bright">Next step</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
            Ready to take it to market—and keep it live?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-paper/80">
            App idea, product, or in-house application—we build it, launch it with production-grade
            security, and manage it for maximum uptime.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="cta-pill">
              Book free consultation
              <ArrowUpRight className="h-4 w-4" />
            </CalendlyButton>
            <Link href="/#social-ads" className="btn-ghost">
              See the social engine
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
