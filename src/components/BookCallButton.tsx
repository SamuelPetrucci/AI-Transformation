'use client'

import { Calendar } from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'

/** Fixed “Book” control — opens Calendly in a new tab (no embed, no chat). */
export default function BookCallButton() {
  return (
    <a
      href={CALENDLY_CONFIG.CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a discovery call on Calendly"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-paper shadow-[0_12px_40px_rgba(12,26,23,0.18)] transition hover:-translate-y-px hover:bg-signal"
    >
      <Calendar className="h-4 w-4" />
      Book
    </a>
  )
}
