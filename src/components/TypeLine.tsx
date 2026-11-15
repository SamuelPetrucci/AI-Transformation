'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const phrases = [
  'Custom software',
  'AI automation',
  'Social content engines',
  'AI receptionists',
  'CRM & ops hubs',
  'Modern tech upgrades',
]

type TypeLineProps = {
  phrases?: string[]
  className?: string
}

export function TypeLine({ phrases: customPhrases, className = '' }: TypeLineProps) {
  const items = customPhrases?.length ? customPhrases : phrases
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setText(items[0] ?? '')
      return
    }

    const current = items[index]
    const speed = deleting ? 28 : 55
    const pause =
      deleting && text === '' ? 280 : !deleting && text === current ? 1400 : speed

    const id = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % items.length)
        return
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1)
      setText(next)
    }, pause)

    return () => window.clearTimeout(id)
  }, [text, deleting, index, items, reduceMotion])

  if (reduceMotion) {
    return (
      <span className={`inline-flex items-baseline text-signal ${className}`}>
        {items[0]}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-baseline text-signal ${className}`}>
      <span>{text || '\u00A0'}</span>
      <span className="caret" aria-hidden />
    </span>
  )
}
