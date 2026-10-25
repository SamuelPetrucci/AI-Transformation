'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Building, User, Mail, Phone, Send, CheckCircle, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import { CALENDLY_CONFIG } from '@/config/calendly'

// Dynamically import Calendly widget to avoid SSR issues
const InlineWidget = dynamic(() => import('react-calendly').then(mod => ({ default: mod.InlineWidget })), {
  ssr: false,
  loading: () => null
})

const consultationTypes = [
  'AI Strategy & Implementation',
  'Custom Landing Themes',
  'Social Media & Advertising Package',
  'Business Process Automation',
  'Digital Transformation',
  'Custom AI Solutions',
  'Data Analytics & Insights',
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
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingMethod, setBookingMethod] = useState('calendly') // 'form' or 'calendly'
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side and the component has mounted
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          consultationType: '',
          message: ''
        })
        
        // Reset form fields using ref
        if (formRef.current) {
          formRef.current.reset()
        }
        
        console.log('Form submitted successfully!')
        setIsSubmitted(true)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }



  return (
    <section id="booking" className="scroll-slide relative min-h-[100svh] overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="overline mb-4">Schedule call</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Book Your Consultation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            AI systems, landing themes, or social advertising—tell us where you want lift.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setBookingMethod('form')}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                bookingMethod === 'form'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Contact Form
            </button>
            <button
              type="button"
              onClick={() => setBookingMethod('calendly')}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                bookingMethod === 'calendly'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Book Directly
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            {bookingMethod === 'form' ? (
              <div className="glass-panel rounded-3xl p-8 shadow-2xl">
                <div className="mb-8 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Contact Form</h3>
                </div>

                                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Consultation Type</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                      isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#121216] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className={`w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                      isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    placeholder="Describe your business needs and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex w-full items-center justify-center space-x-2 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-zinc-600'
                      : 'cta-pill w-full justify-center'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-8 shadow-2xl">
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">Book Your Consultation</h3>
              </div>

              <div className="mb-6 text-center">
                <p className="mb-4 text-zinc-400">
                  Choose a time that works best for you. Our experts are ready to help.
                </p>
                <div className="flex items-center justify-center space-x-2 text-violet-300">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Select your preferred time slot below</span>
                </div>
              </div>

              <div className="h-[700px] w-full">
                {isClient ? (
                  <InlineWidget
                    url={CALENDLY_CONFIG.CALENDLY_URL}
                    styles={CALENDLY_CONFIG.WIDGET_STYLES}
                    pageSettings={CALENDLY_CONFIG.PAGE_SETTINGS}
                    prefill={CALENDLY_CONFIG.PREFILL}
                  />
                ) : (
                  <div className="flex h-[700px] w-full items-center justify-center rounded-lg bg-white/5">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-violet-500" />
                      <p className="text-zinc-400">Loading booking widget...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          </motion.div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 z-50 max-w-md"
          >
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <div className="font-semibold">Thank you!</div>
              <div className="text-sm">We&apos;ll be in touch soon to discuss your AI transformation needs.</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
