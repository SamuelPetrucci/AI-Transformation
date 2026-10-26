'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollSlideProps {
  id?: string
  children: ReactNode
  className?: string
  glow?: 'top' | 'center' | 'right' | 'none'
}

/**
 * Full-viewport slide with gentle scroll-linked motion (slideshow feel without harsh jumps).
 */
export default function ScrollSlide({
  id,
  children,
  className = '',
  glow = 'none',
}: ScrollSlideProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Softer ranges so content stays readable and motion feels fluid
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.5, 0.88, 1],
    reduceMotion ? [1, 1, 1, 1, 1] : [0.72, 1, 1, 1, 0.72]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    reduceMotion ? [0, 0, 0, 0, 0] : [28, 0, 0, 0, -28]
  )

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-slide relative min-h-[100svh] flex flex-col justify-center overflow-hidden ${className}`}
    >
      {glow !== 'none' && (
        <div
          aria-hidden
          className={`pointer-events-none absolute rounded-full blur-[120px] opacity-35 ${
            glow === 'top'
              ? 'top-[-10%] left-1/2 -translate-x-1/2 h-[50vh] w-[70vw] bg-[radial-gradient(circle,rgba(124,58,237,0.55),transparent_70%)]'
              : glow === 'right'
                ? 'top-1/3 right-[-10%] h-[55vh] w-[45vw] bg-[radial-gradient(circle,rgba(139,92,246,0.45),transparent_70%)]'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vw] bg-[radial-gradient(circle,rgba(109,40,217,0.4),transparent_70%)]'
          }`}
        />
      )}

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full flex-1 flex flex-col justify-center will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  )
}
