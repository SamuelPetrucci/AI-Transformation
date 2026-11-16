'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, Phone, Mail } from 'lucide-react'
import CalendlyButton from './CalendlyButton'
import { CONTACT_CONFIG, getCallHref, getSmsConsultHref } from '@/config/contact'

export default function SmartBooking() {
  return (
    <section id="booking" className="scroll-slide relative min-h-[100svh] overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="overline mb-4">Book a consultation</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Book Your Consultation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft sm:text-lg">
            Pick a time on Calendly—no form to fill. Prefer text or a call? Use the options below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-center"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-signal/15 text-signal">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink">Discovery call</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
              Opens Calendly here so you can choose a time without leaving the site.
            </p>
            <CalendlyButton className="cta-pill mx-auto mt-8">
              Book on Calendly
              <Calendar className="h-4 w-4" />
            </CalendlyButton>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-[var(--line)] pt-6">
              <a href={getSmsConsultHref()} className="cta-pill" aria-label="Send a text">
                <MessageSquare className="h-4 w-4" />
                Send a text
              </a>
              <a href={getCallHref()} className="cta-pill" aria-label="Call">
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href={`mailto:${CONTACT_CONFIG.EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal/40 hover:bg-signal/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
