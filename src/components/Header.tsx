'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'
import CalendlyButton from './CalendlyButton'
import { openCalendlyPopup } from '@/lib/calendly-popup'

/** Top bar: homepage story first, then secondary pages, then Book CTA. Logo = Home. */
const navItems = [
  { id: 'products', name: 'Products', sectionId: 'products' as string | null, href: null as string | null },
  { id: 'demos', name: 'POCs', sectionId: 'demos', href: null },
  { id: 'process', name: 'Process', sectionId: 'how-it-works', href: null },
  { id: 'blog', name: 'Blog', sectionId: null, href: '/blog' },
  { id: 'services', name: 'Services', sectionId: null, href: '/services' },
  {
    id: 'booking',
    name: 'Book Consultation',
    sectionId: null,
    href: null,
    calendly: true,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const isIndustriesPage = path === '/industries'
  const isServicesPage = path === '/services'
  const isBlogPage = path === '/blog' || path.startsWith('/blog/')

  const scrollToSection = (
    sectionId: string | null,
    href: string | null,
    calendly?: boolean,
  ) => {
    const onSubpage = isIndustriesPage || isServicesPage || isBlogPage
    if (calendly) {
      void openCalendlyPopup()
    } else if (href) {
      window.location.href = href
    } else if (sectionId) {
      if (onSubpage) {
        window.location.href = `/#${sectionId}`
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (onSubpage) {
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
    if (isBlogPage) {
      setActiveSection('blog')
      return
    }

    const onScrollChrome = () => setScrolled(window.scrollY > 24)
    onScrollChrome()
    window.addEventListener('scroll', onScrollChrome, { passive: true })

    // Real homepage section IDs only (matches page.tsx order)
    const sectionIds = ['home', 'products', 'demos', 'social-ads', 'how-it-works', 'booking', 'contact']
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
        if (id === 'home' || id === 'contact') {
          setActiveSection('home')
          return
        }
        // Content Engine walkthrough sits between demos and process — keep Process nearby highlight
        if (id === 'social-ads') {
          setActiveSection('demos')
          return
        }
        const match = navItems.find((item) => item.id === id || item.sectionId === id)
        if (match) setActiveSection(match.id)
      },
      { threshold: [0.3, 0.5, 0.65] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => {
      window.removeEventListener('scroll', onScrollChrome)
      observer.disconnect()
    }
  }, [isIndustriesPage, isServicesPage, isBlogPage])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--line)] bg-[rgba(243,246,244,0.78)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            type="button"
            className="flex items-center"
            onClick={() => {
              if (window.location.pathname !== '/') window.location.href = '/'
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <BrandLogo
              markClassName="h-9 w-9"
              wordmark="AI Transformation"
              className="[&>span:last-child]:text-lg sm:[&>span:last-child]:text-xl"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems
              .filter((item) => item.id !== 'booking')
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId, item.href, 'calendly' in item && item.calendly)}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-signal/10 text-ink'
                      : 'text-ink-soft hover:bg-white/50 hover:text-ink'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            <CalendlyButton className="btn-primary ml-2 !px-4 !py-2 text-sm">
              Book Consultation
            </CalendlyButton>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-ink-soft transition-colors hover:text-ink lg:hidden"
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
                onClick={() => scrollToSection(item.sectionId, item.href, 'calendly' in item && item.calendly)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-all ${
                  activeSection === item.id
                    ? 'bg-signal/10 text-ink'
                    : 'text-ink-soft hover:bg-white/60 hover:text-ink'
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
