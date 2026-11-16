import { CALENDLY_CONFIG } from '@/config/calendly'

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const STYLESHEET_HREF = 'https://assets.calendly.com/assets/external/widget.css'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

let loadPromise: Promise<void> | null = null

function ensureStylesheet() {
  if (typeof document === 'undefined') return
  if (document.querySelector(`link[href="${STYLESHEET_HREF}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = STYLESHEET_HREF
  document.head.appendChild(link)
}

function loadCalendlyScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Calendly?.initPopupWidget) return Promise.resolve()
  if (loadPromise) return loadPromise

  ensureStylesheet()

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Calendly script failed to load')))
      if (window.Calendly?.initPopupWidget) resolve()
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Calendly script failed to load'))
    document.body.appendChild(script)
  })

  return loadPromise
}

/** Prefetch Calendly assets after idle so the first Book click is snappy. */
export function prefetchCalendly() {
  void loadCalendlyScript().catch(() => undefined)
}

/** Open the discovery-call Calendly UI as an on-page popup (falls back to a new tab). */
export async function openCalendlyPopup(url: string = CALENDLY_CONFIG.CALENDLY_URL) {
  try {
    await loadCalendlyScript()
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url })
      return
    }
  } catch {
    // fall through
  }
  window.open(url, '_blank', 'noopener,noreferrer')
}
