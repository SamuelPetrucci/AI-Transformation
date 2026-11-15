'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Image as ImageIcon,
  CalendarClock,
  Megaphone,
  Check,
  Play,
} from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'

const pipeline = [
  { id: 'brief', label: 'Brief', icon: Sparkles },
  { id: 'draft', label: 'Draft', icon: ImageIcon },
  { id: 'schedule', label: 'Schedule', icon: CalendarClock },
  { id: 'ads', label: 'Advertise', icon: Megaphone },
]

const feedPosts = [
  {
    platform: 'Instagram',
    tone: 'from-ember/40 to-ember/30',
    title: 'Before vs after HVAC tune-up',
    caption: 'Same truck. New booking flow. Posts went out while you were on jobs.',
  },
  {
    platform: 'Facebook',
    tone: 'from-signal/40 to-signal-bright/25',
    title: 'Spring service special',
    caption: 'Caption + creative drafted, scheduled, and tracked—no late nights in Canva.',
  },
  {
    platform: 'Meta Ads',
    tone: 'from-signal/45 to-signal-bright/30',
    title: 'Lead form campaign live',
    caption: 'Constant presence. Your ad budget works while you run the business.',
  },
  {
    platform: 'Instagram',
    tone: 'from-ember/35 to-signal/30',
    title: 'Team tip Tuesday',
    caption: 'Calendar fills itself. You approve. We publish and keep the feed warm.',
  },
]

export default function SocialContentEngine() {
  const [step, setStep] = useState(0)
  const [post, setPost] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => {
      setStep((s) => (s + 1) % pipeline.length)
    }, 1600)
    return () => clearInterval(t)
  }, [running])

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => {
      setPost((p) => (p + 1) % feedPosts.length)
    }, 2400)
    return () => clearInterval(t)
  }, [running])

  const current = feedPosts[post]
  const activeStep = pipeline[step]

  const runOnce = () => {
    setRunning(false)
    setStep(0)
    setPost(0)
    let i = 0
    const tick = () => {
      i += 1
      setStep(i % pipeline.length)
      if (i % 2 === 0) setPost((p) => (p + 1) % feedPosts.length)
      if (i < pipeline.length * 2) {
        window.setTimeout(tick, 700)
      } else {
        setRunning(true)
      }
    }
    window.setTimeout(tick, 500)
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55">
      {/* Agents-hero style atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.4),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />

      {/* Background slideshow of feed cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute inset-y-0 left-0 flex gap-4 py-10 pl-6"
          animate={{ x: ['0%', '-35%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[...feedPosts, ...feedPosts, ...feedPosts].map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`h-56 w-40 shrink-0 rounded-3xl border border-[var(--line)] bg-gradient-to-br ${item.tone} p-4`}
            >
              <p className="text-[10px] uppercase tracking-wider text-ink/70">{item.platform}</p>
              <p className="mt-8 font-display text-sm text-ink">{item.title}</p>
              <div className="mt-auto pt-10">
                <div className="h-1.5 w-12 rounded-full bg-white/30" />
                <div className="mt-2 h-1.5 w-20 rounded-full bg-white/20" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="overline mb-4 text-signal">Social content engine</p>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            You run the business.
            <span className="block text-signal-bright">We keep you posting.</span>
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            A configured content + ads engine drafts, schedules, and keeps advertising warm—so your
            feed stays alive while you stay on the tools, on the phone, and with customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {pipeline.map((p, i) => (
              <div
                key={p.id}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  i === step
                    ? 'border-signal/60 bg-signal/15 text-ink'
                    : i < step
                      ? 'border-signal/30 text-signal'
                      : 'border-[var(--line)] text-ink-soft/70'
                }`}
              >
                {i < step ? <Check className="h-3.5 w-3.5" /> : <p.icon className="h-3.5 w-3.5" />}
                {p.label}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={runOnce} className="cta-pill">
              <Play className="h-4 w-4" />
              One-click demo
            </button>
            <a
              href={CALENDLY_CONFIG.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal/40 hover:bg-signal/10"
            >
              Get the engine for your business
            </a>
          </div>
        </div>

        {/* Phone / feed stage */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0c1a17] shadow-[0_0_60px_rgba(15,143,117,0.18)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
                Live engine
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
                {activeStep.label}
              </span>
            </div>

            <div className="relative min-h-[340px] p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.platform}-${post}-${step}`}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${current.tone}`}
                >
                  <div className="flex items-center justify-between px-4 pt-4">
                    <p className="text-xs font-semibold text-paper/90">{current.platform}</p>
                    <p className="text-[10px] uppercase tracking-wider text-paper/60">Scheduled</p>
                  </div>
                  <div className="mx-4 mt-4 aspect-square rounded-xl border border-white/10 bg-black/25">
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <motion.div
                        animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.04, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-paper"
                      >
                        <activeStep.icon className="h-7 w-7" />
                      </motion.div>
                      <p className="font-display text-lg text-paper">{current.title}</p>
                    </div>
                  </div>
                  <p className="px-4 py-4 text-sm leading-relaxed text-paper/85">{current.caption}</p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="mt-4 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 text-xs text-paper/75"
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                Engine status: {activeStep.label.toLowerCase()} → next post queued → ads stay warm
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
