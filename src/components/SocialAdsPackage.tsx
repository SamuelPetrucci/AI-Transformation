'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'
import SocialContentEngine from './SocialContentEngine'

export default function SocialAdsPackage() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="social-ads" glow="none" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Content Engine
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            How one product line works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-base text-ink-soft"
          >
            Pricing lives in Products above. Here is the problem it solves—and the four steps.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <SocialContentEngine />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={scrollToProducts} className="btn-ghost">
            Back to products
          </button>
          <button type="button" onClick={scrollToBooking} className="cta-pill">
            Get Content Engine
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ScrollSlide>
  )
}
