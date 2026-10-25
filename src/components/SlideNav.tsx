'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const slides = [
  { id: 'home', label: 'Home' },
  { id: 'why-us', label: 'Why us' },
  { id: 'themes', label: 'Themes' },
  { id: 'social-ads', label: 'Ads' },
  { id: 'features', label: 'Services' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'booking', label: 'Book' },
]

export default function SlideNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const elements = slides
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { threshold: [0.35, 0.55, 0.7] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {slides.map((slide) => {
        const isActive = active === slide.id
        return (
          <button
            key={slide.id}
            type="button"
            title={slide.label}
            aria-label={`Go to ${slide.label}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() =>
              document.getElementById(slide.id)?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative flex items-center justify-end"
          >
            <span className="mr-3 translate-x-2 rounded-md bg-black/70 px-2 py-1 text-[10px] uppercase tracking-wider text-white opacity-0 backdrop-blur transition-all group-hover:translate-x-0 group-hover:opacity-100">
              {slide.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-8 w-2 bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]'
                  : 'h-2 w-2 bg-white/30 group-hover:bg-white/70'
              }`}
            />
            {isActive && (
              <motion.span
                layoutId="slide-dot"
                className="pointer-events-none absolute inset-0"
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
