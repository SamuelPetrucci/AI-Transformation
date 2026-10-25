'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/8 bg-[#050505]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.2),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
                <rect x="4" y="8" width="18" height="18" rx="5" stroke="#a78bfa" strokeWidth="2.2" />
                <rect x="16" y="14" width="18" height="18" rx="5" stroke="#e9e3ff" strokeWidth="2.2" />
              </svg>
              <span className="font-display text-2xl font-semibold text-white">
                AI Transformation LLC
              </span>
            </div>
            <p className="mb-6 max-w-md text-zinc-400">
              Elite AI solutions, custom landing themes, and social advertising packages that drive
              measurable growth for U.S. businesses.
            </p>
            <a
              href="https://www.linkedin.com/company/ai-transformations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-violet-400/50 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display mb-6 text-lg font-medium text-white">Contact</h3>
            <div className="space-y-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <span>(959) 910-1693</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <span>info@aitransformationllc.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <span>support@aitransformationllc.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} AI Transformation LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
