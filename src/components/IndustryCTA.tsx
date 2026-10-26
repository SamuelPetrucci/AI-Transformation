'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Phone, Mail } from 'lucide-react'

export default function IndustryCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.18),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Ready to save time and grow in your industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Schedule a free consultation for your industry-specific tech needs.
          </motion.p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { icon: Calendar, title: 'Book a call', detail: 'Pick a time that works for you' },
            {
              icon: Phone,
              title: 'Talk strategy',
              detail: '(860) 705-3417',
              href: 'tel:+18607053417',
            },
            {
              icon: Mail,
              title: 'Email us',
              detail: 'info@aitransformationllc.com',
              href: 'mailto:info@aitransformationllc.com',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-3xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              {'href' in item && item.href ? (
                <a href={item.href} className="mt-1 block text-sm text-zinc-400 transition hover:text-white">
                  {item.detail}
                </a>
              ) : (
                <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/#booking" className="cta-pill">
            Schedule consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
