'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { openCalendlyPopup } from '@/lib/calendly-popup'
import { CALENDLY_CONFIG } from '@/config/calendly'

type CalendlyButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  children: ReactNode
  url?: string
}

/** Button that opens Calendly in a popup without leaving the site. */
export default function CalendlyButton({
  children,
  url = CALENDLY_CONFIG.CALENDLY_URL,
  type = 'button',
  ...props
}: CalendlyButtonProps) {
  return (
    <button
      type={type}
      {...props}
      onClick={(e) => {
        e.preventDefault()
        void openCalendlyPopup(url)
      }}
    >
      {children}
    </button>
  )
}
