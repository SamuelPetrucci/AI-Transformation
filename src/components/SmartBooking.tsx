'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Building, User, Mail, Phone, Send, CheckCircle, ExternalLink } from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { PRODUCTS_BOOKING_OPTIONS } from '@/config/products'

const consultationTypes = [
  'Not sure — match me to a product',
  ...PRODUCTS_BOOKING_OPTIONS,
  'Technology Consulting',
]

export default function SmartBooking() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultationType: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData(e.currentTarget)
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          consultationType: '',
          message: '',
        })
        if (formRef.current) formRef.current.reset()
        setIsSubmitted(true)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }

    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
            Pick a time on Calendly for a free discovery call—or send a message if you prefer.
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
              Opens Calendly in a new tab so you can choose a time that works.
            </p>
            <a
              href={CALENDLY_CONFIG.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill mx-auto mt-8"
            >
              Book on Calendly
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setShowForm((v) => !v)}
              className="mt-5 text-sm text-ink-soft/70 underline-offset-4 transition hover:text-ink-soft hover:underline"
            >
              {showForm ? 'Hide contact form' : 'Prefer email? Use the contact form'}
            </button>
          </div>
        </motion.div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-full max-w-4xl"
          >
            <div className="glass-panel rounded-3xl p-8 shadow-2xl">
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/15 text-signal">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">Contact Form</h3>
                  <p className="text-ink-soft">We&apos;ll get back to you shortly</p>
                </div>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-xl border border-signal/30 bg-signal/10 p-4"
                >
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-signal" />
                    <span className="font-medium text-signal">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-soft">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[var(--line)] bg-white/70 py-3 pl-10 pr-4 text-ink placeholder:text-ink-soft/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-soft">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[var(--line)] bg-white/70 py-3 pl-10 pr-4 text-ink placeholder:text-ink-soft/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-soft">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[var(--line)] bg-white/70 py-3 pl-10 pr-4 text-ink placeholder:text-ink-soft/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-soft">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[var(--line)] bg-white/70 py-3 pl-10 pr-4 text-ink placeholder:text-ink-soft/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-soft">
                    Consultation Type *
                  </label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 text-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                  >
                    <option value="" className="bg-paper">
                      Select consultation type
                    </option>
                    {consultationTypes.map((type) => (
                      <option key={type} value={type} className="bg-paper">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-soft">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-signal"
                    placeholder="Tell us about your project or questions..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="cta-pill w-full justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
