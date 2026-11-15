'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react'
import BrandLogo from './BrandLogo'
import { CONTACT_CONFIG, getSmsConsultHref } from '@/config/contact'
import { CALENDLY_CONFIG } from '@/config/calendly'

const exploreLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Demos', href: '/#demos' },
  { label: 'Process', href: '/#how-it-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Book Consultation', href: CALENDLY_CONFIG.CALENDLY_URL, external: true },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[var(--line)] bg-paper">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.12),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <BrandLogo
                markClassName="h-10 w-10"
                wordmark="AI Transformation LLC"
                className="[&>span:last-child]:text-2xl"
              />
            </div>
            <p className="mb-6 max-w-md text-ink-soft">
              AI Transformation LLC helps businesses save time, reduce costs, and grow through custom
              software, AI agents, and modern technology solutions.
            </p>
            <a
              href={getSmsConsultHref()}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-signal/60 hover:bg-signal/15"
            >
              <MessageSquare className="h-4 w-4 text-signal" />
              Text my number for contact
            </a>
            <div>
              <a
                href="https://www.linkedin.com/company/ai-transformations/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-ink-soft transition-all hover:border-signal hover:text-signal"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display mb-6 text-lg font-medium text-ink">Explore</h3>
            <ul className="space-y-3 text-ink-soft">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="transition hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display mb-6 text-lg font-medium text-ink">Contact Info</h3>
            <div className="space-y-4 text-ink-soft">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-signal" />
                <a href={getSmsConsultHref()} className="transition hover:text-ink">
                  Text {CONTACT_CONFIG.SMS_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-signal" />
                <a href={`tel:${CONTACT_CONFIG.VOICE_E164}`} className="transition hover:text-ink">
                  {CONTACT_CONFIG.VOICE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-signal" />
                <span>{CONTACT_CONFIG.EMAIL}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-signal" />
                <span>support@aitransformationllc.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-8">
          <p className="text-sm text-ink-soft/70">
            © {new Date().getFullYear()} AI Transformation LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
