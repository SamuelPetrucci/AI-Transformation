'use client'

import { useId } from 'react'

interface BrandLogoProps {
  className?: string
  withWordmark?: boolean
  wordmark?: string
  markClassName?: string
}

/**
 * Tech interlocking mark — dual frames with cyan→violet gradient + node accents.
 */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const strokeId = `ait-stroke-${uid}`
  const coreId = `ait-core-${uid}`
  const glowId = `ait-glow-${uid}`

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={strokeId} x1="4" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" />
          <stop offset="0.45" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#e9e3ff" />
        </linearGradient>
        <linearGradient id={coreId} x1="14" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" stopOpacity="0.95" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.95" />
        </linearGradient>
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.15" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="5"
        y="7"
        width="17"
        height="17"
        rx="4"
        stroke={`url(#${strokeId})`}
        strokeWidth="2"
        opacity="0.85"
      />
      <rect
        x="16"
        y="14"
        width="17"
        height="17"
        rx="4"
        stroke={`url(#${strokeId})`}
        strokeWidth="2"
        filter={`url(#${glowId})`}
      />

      <circle cx="18.5" cy="18.5" r="2.15" fill={`url(#${coreId})`} />
      <circle
        cx="18.5"
        cy="18.5"
        r="3.45"
        stroke="#67e8f9"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />

      <path
        d="M18.5 16.15V14.35M18.5 22.65v1.8M16.15 18.5H14.35M22.65 18.5h1.8"
        stroke="#c4b5fd"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  )
}

export default function BrandLogo({
  className = '',
  withWordmark = true,
  wordmark = 'AI Transformation',
  markClassName = 'h-9 w-9',
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      {withWordmark && (
        <span className="font-display font-semibold tracking-tight text-white">{wordmark}</span>
      )}
    </span>
  )
}
