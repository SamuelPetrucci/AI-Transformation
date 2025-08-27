'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Check if we're on the industries page
  const isIndustriesPage = typeof window !== 'undefined' && window.location.pathname === '/industries'

  const navItems = [
    { id: 'home', name: 'Home', sectionId: null, href: null },
    { id: 'services', name: 'Services', sectionId: 'features', href: null },
    { id: 'about', name: 'About', sectionId: 'how-it-works', href: null },
    { id: 'booking', name: 'Book Consultation', sectionId: 'booking', href: null },
    { id: 'contact', name: 'Contact', sectionId: 'contact', href: null },
    { id: 'industries', name: 'Industries', sectionId: null, href: '/industries' },
  ]

  // Function to scroll to section or navigate to page
  const scrollToSection = (sectionId: string | null, href: string | null) => {
    if (href) {
      window.location.href = href
    } else if (sectionId) {
      // If we're on the industries page and trying to go to a section, navigate to home first
      if (isIndustriesPage) {
        window.location.href = `/#${sectionId}`
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    } else {
      // Home button - navigate to home page
      if (isIndustriesPage) {
        window.location.href = '/'
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  // Function to detect which section is currently in view
  const detectActiveSection = () => {
    // If we're on the industries page, set industries as active
    if (isIndustriesPage) {
      setActiveSection('industries')
      return
    }

    const sections = navItems.filter(item => item.sectionId).map(item => item.sectionId!)
    const scrollPosition = window.scrollY + 100 // Offset for header height

    // Check if we're at the top (home section)
    if (scrollPosition < 200) {
      setActiveSection('home')
      return
    }

    // Check each section
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i]
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          const navItem = navItems.find(item => item.sectionId === sectionId)
          if (navItem) {
            setActiveSection(navItem.id)
          }
          return
        }
      }
    }
  }

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      detectActiveSection()
    }

    // Set initial active section based on current page
    detectActiveSection()

    // Only add scroll listener if not on industries page
    if (!isIndustriesPage) {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isIndustriesPage])

  return (
    <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => scrollToSection(null, null)}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
              AI Transformation LLC
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.sectionId, item.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-blue-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.sectionId, item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-blue-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
