'use client'

import { Calendar } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

/** Fixed “Book” control — opens Calendly as an on-page popup. */
export default function BookCallButton() {
  return (
    <CalendlyButton
      aria-label="Book a discovery call on Calendly"
      className="btn-primary fixed bottom-6 right-6 z-50 !px-5 !py-3.5 text-sm shadow-[0_12px_40px_rgba(12,26,23,0.18)]"
    >
      <Calendar className="h-4 w-4 shrink-0" aria-hidden />
      <span>Book</span>
    </CalendlyButton>
  )
}
