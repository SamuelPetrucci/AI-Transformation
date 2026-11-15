'use client'

import { useId } from 'react'

interface BrandLogoProps {
  className?: string
  withWordmark?: boolean
  wordmark?: string
  markClassName?: string
  /** Use on dark/teal bands where wordmark must stay light */
  onDark?: boolean
}

/**
 * AT signal mark — geometric “A” in an ink seal with a teal signal crossbar.
 * Reads as growth (ascending strokes) + forward motion (signal node).
 */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const signalId = `ait-signal-${uid}`

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={signalId} x1="10" y1="20" x2="32" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f8f75" />
          <stop offset="1" stopColor="#18b894" />
        </linearGradient>
      </defs>

      {/* Seal */}
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="#0c1a17" />

      {/* Soft inner rim */}
      <rect
        x="3.25"
        y="3.25"
        width="33.5"
        height="33.5"
        rx="9.5"
        stroke="rgba(243,246,244,0.12)"
        strokeWidth="1"
      />

      {/* Geometric A — ascending legs */}
      <path
        d="M12.5 29.5 L20 9.5 L27.5 29.5"
        stroke="#f3f6f4"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Teal signal crossbar + forward node */}
      <path
        d="M14.25 22.25 H26.75"
        stroke={`url(#${signalId})`}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="29.4" cy="22.25" r="2.15" fill="#18b894" />
      <circle cx="29.4" cy="22.25" r="3.6" stroke="#18b894" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  )
}

export default function BrandLogo({
  className = '',
  withWordmark = true,
  wordmark = 'AI Transformation',
  markClassName = 'h-9 w-9',
  onDark = false,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      {withWordmark && (
        <span
          className={`font-display font-bold tracking-[-0.03em] leading-none ${
            onDark ? 'text-paper' : 'text-ink'
          }`}
        >
          {wordmark}
        </span>
      )}
    </span>
  )
}
