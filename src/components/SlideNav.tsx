'use client'

import { useEffect, useState } from 'react'

/** Matches homepage section order + Header labels where they overlap. */
const slides = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'demos', label: 'Demos' },
  { id: 'social-ads', label: 'Engine' },
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
      { threshold: [0.25, 0.45, 0.65] }
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
            <span className="mr-3 translate-x-2 rounded-md border border-[var(--line)] bg-white/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {slide.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? 'h-8 w-2 bg-signal'
                  : 'h-2 w-2 bg-mist group-hover:bg-signal/60'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
