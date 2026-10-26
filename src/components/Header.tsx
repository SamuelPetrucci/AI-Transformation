'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navItems = [
  { id: 'home', name: 'Home', sectionId: null as string | null, href: null as string | null },
  { id: 'services', name: 'Services', sectionId: null, href: '/services' },
  { id: 'industries', name: 'Industries', sectionId: null, href: '/industries' },
  { id: 'demos', name: 'Demos', sectionId: 'demos', href: null },
  { id: 'agents', name: 'Agent Ops', sectionId: null, href: '/agents' },
  { id: 'blog', name: 'Blog', sectionId: null, href: '/blog' },
  { id: 'social-ads', name: 'Social & Ads', sectionId: 'social-ads', href: null },
  { id: 'booking', name: 'Book Consultation', sectionId: 'booking', href: null },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const isIndustriesPage = path === '/industries'
  const isServicesPage = path === '/services'
  const isAgentsPage = path === '/agents'
  const isBlogPage = path === '/blog' || path.startsWith('/blog/')

  const scrollToSection = (sectionId: string | null, href: string | null) => {
    const onSubpage = isIndustriesPage || isServicesPage || isAgentsPage || isBlogPage
    if (href) {
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
    if (isAgentsPage) {
      setActiveSection('agents')
      return
    }
    if (isBlogPage) {
      setActiveSection('blog')
      return
    }

    const onScrollChrome = () => setScrolled(window.scrollY > 24)
    onScrollChrome()
    window.addEventListener('scroll', onScrollChrome, { passive: true })

    const sectionIds = ['home', 'features', 'demos', 'how-it-works', 'why-us', 'social-ads', 'booking', 'contact']
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
        if (id === 'home' || id === 'features' || id === 'why-us') {
          setActiveSection(id === 'home' ? 'home' : id === 'features' ? 'services' : 'home')
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
  }, [isIndustriesPage, isServicesPage, isAgentsPage, isBlogPage])

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
