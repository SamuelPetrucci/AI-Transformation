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
      className="book-call-fab"
    >
      <Calendar className="h-4 w-4" aria-hidden />
      <span>Book a call</span>
    </a>
  )
}
