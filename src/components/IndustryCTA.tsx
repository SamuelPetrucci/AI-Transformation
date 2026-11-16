'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Phone, Mail } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function IndustryCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Get started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl"
          >
            Ready to save time and grow in your industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-ink-soft"
          >
            Schedule a free consultation for your industry-specific tech needs.
          </motion.p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              icon: Calendar,
              title: 'Book a call',
              detail: 'Pick a time that works for you',
              calendly: true,
            },
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
              className="project-row flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white/55 px-5 py-5 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                {'calendly' in item && item.calendly ? (
                  <CalendlyButton className="mt-1 block text-left text-sm text-ink-soft transition hover:text-signal">
                    {item.detail}
                  </CalendlyButton>
                ) : 'href' in item && item.href ? (
                  <a href={item.href} className="mt-1 block text-sm text-ink-soft transition hover:text-signal">
                    {item.detail}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="band-ink rounded-[2rem] px-8 py-10 text-center sm:px-12">
          <h3 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
            Book a free discovery call
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-paper/80">
            We&apos;ll map the fastest path for your industry under custom software, AI automation, or
            modern technology solutions.
          </p>
          <div className="mt-7">
            <CalendlyButton className="cta-pill">
              Schedule consultation
              <ArrowUpRight className="h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
