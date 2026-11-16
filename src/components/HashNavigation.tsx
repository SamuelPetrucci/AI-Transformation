'use client'

import { useEffect } from 'react'
import { openCalendlyPopup } from '@/lib/calendly-popup'

export default function HashNavigation() {
  useEffect(() => {
    const handleHashNavigation = () => {
      if (typeof window === 'undefined' || !window.location.hash) return
      const hash = window.location.hash.substring(1)

      // Booking deep links open Calendly in-place instead of only scrolling
      if (hash === 'booking') {
        window.setTimeout(() => {
          void openCalendlyPopup()
        }, 150)
        return
      }

      const element = document.getElementById(hash)
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }

    handleHashNavigation()
    window.addEventListener('hashchange', handleHashNavigation)
    return () => window.removeEventListener('hashchange', handleHashNavigation)
  }, [])

  return null
}
