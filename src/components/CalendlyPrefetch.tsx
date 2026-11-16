'use client'

import { useEffect } from 'react'
import { prefetchCalendly } from '@/lib/calendly-popup'

/** Warm Calendly popup assets after first paint so Book clicks open faster. */
export default function CalendlyPrefetch() {
  useEffect(() => {
    const run = () => prefetchCalendly()
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(run, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }
    const t = window.setTimeout(run, 1200)
    return () => window.clearTimeout(t)
  }, [])

  return null
}
