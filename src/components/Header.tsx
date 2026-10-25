'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', name: 'Home', sectionId: null as string | null, href: null as string | null },
  { id: 'themes', name: 'Themes', sectionId: 'themes', href: null },
  { id: 'social-ads', name: 'Social & Ads', sectionId: 'social-ads', href: null },
  { id: 'services', name: 'Services', sectionId: null, href: '/services' },
  { id: 'booking', name: 'Schedule call', sectionId: 'booking', href: null },
  { id: 'industries', name: 'Industries', sectionId: null, href: '/industries' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const isIndustriesPage =
    typeof window !== 'undefined' && window.location.pathname === '/industries'
  const isServicesPage =
    typeof window !== 'undefined' && window.location.pathname === '/services'

  const scrollToSection = (sectionId: string | null, href: string | null) => {
    if (href) {
      window.location.href = href
    } else if (sectionId) {
      if (isIndustriesPage || isServicesPage) {
        window.location.href = `/#${sectionId}`
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (isIndustriesPage || isServicesPage) {
      window.location.href = '/'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isIndustriesPage) {
      setActiveSection('industries')
      return
    }
    if (isServicesPage) {
      setActiveSection('services')
      return
    }

    const onScrollChrome = () => setScrolled(window.scrollY > 24)
    onScrollChrome()
    window.addEventListener('scroll', onScrollChrome, { passive: true })

    const sectionIds = ['home', 'themes', 'social-ads', 'features', 'how-it-works', 'booking', 'why-us']
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible?.target?.id) return

        const id = visible.target.id
        if (id === 'why-us') {
          setActiveSection('home')
          return
        }
        if (id === 'features' || id === 'how-it-works') {
          setActiveSection('')
          return
        }
        const match = navItems.find((item) => item.id === id || item.sectionId === id)
        if (match) setActiveSection(match.id)
      },
      { threshold: [0.35, 0.55, 0.7] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => {
      window.removeEventListener('scroll', onScrollChrome)
      observer.disconnect()
    }
  }, [isIndustriesPage, isServicesPage])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-black/50 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            type="button"
            className="flex items-center gap-3"
            onClick={() => {
              if (window.location.pathname !== '/') window.location.href = '/'
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="relative flex h-9 w-9 items-center justify-center">
              <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
                <rect x="4" y="8" width="18" height="18" rx="5" stroke="#a78bfa" strokeWidth="2.2" />
                <rect x="16" y="14" width="18" height="18" rx="5" stroke="#e9e3ff" strokeWidth="2.2" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              AI Transformation
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.sectionId, item.href)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-300 transition-colors hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="glass-panel mb-4 rounded-2xl p-2 lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.sectionId, item.href)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-all ${
                  activeSection === item.id
                    ? 'bg-violet-500/20 text-white'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
