'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollSlide from './ScrollSlide'

const themes = [
  {
    id: 'midnight',
    name: 'Midnight Elite',
    tag: 'Dark · Premium',
    description:
      'Deep blacks, violet ambient light, and glass panels—built for AI, SaaS, and talent brands.',
    accent: '#8b5cf6',
    surface: '#050505',
    headline: 'Command the future.',
    previewClass: 'from-[#1a1030] via-[#050505] to-[#0a0612]',
  },
  {
    id: 'signal',
    name: 'Signal Clear',
    tag: 'Light · Conversion',
    description:
      'High-contrast editorial layout with crisp CTAs—optimized for lead capture and demos.',
    accent: '#2563eb',
    surface: '#f4f4f5',
    headline: 'Clarity that converts.',
    previewClass: 'from-[#eef2ff] via-[#f8fafc] to-[#e2e8f0]',
  },
  {
    id: 'aurora',
    name: 'Aurora Motion',
    tag: 'Gradient · Immersive',
    description:
      'Scroll-driven motion, gradient fields, and product storytelling for launch campaigns.',
    accent: '#06b6d4',
    surface: '#020617',
    headline: 'Launch with presence.',
    previewClass: 'from-[#0f172a] via-[#164e63] to-[#312e81]',
  },
  {
    id: 'atelier',
    name: 'Atelier Studio',
    tag: 'Brand · Portfolio',
    description:
      'Gallery-first composition for agencies and creatives who need quiet luxury and polish.',
    accent: '#d4a574',
    surface: '#14110f',
    headline: 'Craft over noise.',
    previewClass: 'from-[#1c1917] via-[#292524] to-[#0c0a09]',
  },
]

export default function ThemeShowcase() {
  const [active, setActive] = useState(themes[0])

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScrollSlide id="themes" glow="center" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            Theme Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Landing themes, ready to customize.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            Scroll through production-ready visual systems we adapt for your brand—each theme ships
            with motion, responsive layouts, and conversion-focused structure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col gap-3">
            {themes.map((theme, index) => {
              const isActive = active.id === theme.id
              return (
                <motion.button
                  key={theme.id}
                  type="button"
                  onClick={() => setActive(theme)}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    isActive
                      ? 'border-violet-400/40 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]'
                      : 'border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-medium text-white">{theme.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {theme.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">{theme.description}</p>
                </motion.button>
              )
            })}
          </div>

          <motion.div
            layout
            className="theme-preview-frame relative min-h-[420px] lg:min-h-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 bg-gradient-to-br ${active.previewClass}`}
              >
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ background: active.accent }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: active.surface === '#f4f4f5' ? '#0a0a0a' : '#fff' }}
                      >
                        {active.name}
                      </span>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-[10px] uppercase tracking-widest"
                      style={{
                        background: `${active.accent}22`,
                        color: active.accent,
                      }}
                    >
                      Live preview
                    </span>
                  </div>

                  <div className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center text-center">
                    <p
                      className="mb-3 text-[10px] uppercase tracking-[0.28em]"
                      style={{ color: active.accent }}
                    >
                      Custom build
                    </p>
                    <h3
                      className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
                      style={{ color: active.surface === '#f4f4f5' ? '#0a0a0a' : '#fff' }}
                    >
                      {active.headline}
                    </h3>
                    <div
                      className="mt-8 h-px w-24"
                      style={{ background: `linear-gradient(90deg, transparent, ${active.accent}, transparent)` }}
                    />
                    <div className="mt-10 grid w-full grid-cols-3 gap-3">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-16 rounded-xl border"
                          style={{
                            borderColor: `${active.accent}33`,
                            background: `${active.accent}${i === 1 ? '28' : '12'}`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex justify-center pt-6">
                    <button type="button" onClick={scrollToBooking} className="cta-pill text-sm">
                      Build this theme
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </ScrollSlide>
  )
}
