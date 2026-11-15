'use client'

import { MessageSquare, Phone, Search, Sparkles, ShieldCheck, Megaphone } from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { getCallHref, getSmsConsultHref } from '@/config/contact'

const stages = [
  {
    icon: Search,
    label: 'Train',
    detail: 'Business data, brand, logos, and voice.',
  },
  {
    icon: Sparkles,
    label: 'Script',
    detail: 'Hooks and outlines for the platforms you use.',
  },
  {
    icon: ShieldCheck,
    label: 'Approve',
    detail: 'Nothing posts until a human says yes.',
  },
  {
    icon: Megaphone,
    label: 'Post + ads',
    detail: 'Publish natively—then amplify when it makes sense.',
  },
]

export default function SocialContentEngine() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55 p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.22),transparent_55%)]" />

      <div className="relative z-10 max-w-3xl">
        <p className="overline mb-4 text-signal">The problem → the fix</p>
        <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Content stalls. Ads feel off-brand.
          <span className="mt-2 block text-signal-bright">
            One engine drafts; you approve; it posts.
          </span>
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          We train an agent on your business, brand, and logos. It plans scripts and drafts for the
          channels you use. A human approves every piece. Past content can become product ads—or we
          plan a new approach.
        </p>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {stages.map((stage, index) => (
            <li
              key={stage.label}
              className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white/60 px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <stage.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">
                  <span className="font-mono text-[10px] tracking-wider text-signal uppercase">
                    0{index + 1}
                  </span>{' '}
                  {stage.label}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">{stage.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={getSmsConsultHref()} className="cta-pill" aria-label="Send a text">
            <MessageSquare className="h-4 w-4" />
            Send a text
          </a>
          <a href={getCallHref()} className="cta-pill" aria-label="Call">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={CALENDLY_CONFIG.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal/40 hover:bg-signal/10"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </div>
  )
}
