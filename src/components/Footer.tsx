'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/8 bg-[#050505]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.2),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <BrandLogo
                markClassName="h-10 w-10"
                wordmark="AI Transformation LLC"
                className="[&>span:last-child]:text-2xl"
              />
            </div>
            <p className="mb-6 max-w-md text-zinc-400">
              Transform your business with cutting-edge AI solutions. We help organizations leverage
              the power of artificial intelligence to drive growth and operational efficiency.
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
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display mb-6 text-lg font-medium text-white">Contact Info</h3>
            <div className="space-y-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <a href="tel:+18607053417" className="transition hover:text-white">
                  (860) 705-3417
                </a>
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
