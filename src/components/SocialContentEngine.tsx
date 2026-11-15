'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Megaphone,
  Check,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { CALENDLY_CONFIG } from '@/config/calendly'
import { getCallHref, getSmsConsultHref } from '@/config/contact'
import { PRODUCT_EASE, PRODUCT_MOTION } from '@/config/motion'

const feedPosts = [
  {
    platform: 'LinkedIn',
    tone: 'from-ember/40 to-ember/30',
    title: 'Before vs after HVAC tune-up',
    caption: 'Draft ready. Human approved. Posted while you were on jobs.',
  },
  {
    platform: 'TikTok',
    tone: 'from-signal/40 to-signal-bright/25',
    title: 'Spring service special',
    caption: 'Same script, platform-native cut—agent drafted, you signed off.',
  },
  {
    platform: 'YouTube Shorts',
    tone: 'from-signal/45 to-signal-bright/30',
    title: 'Lead form campaign live',
    caption: 'Organic post → product ad creative. Your budget works; brand stays yours.',
  },
  {
    platform: 'X · Instagram · more',
    tone: 'from-ember/35 to-signal/30',
    title: 'Team tip Tuesday',
    caption: 'Any channel you name. Calendar fills. Nothing publishes without a human yes.',
  },
]

const engineStages = [
  {
    id: 'train',
    label: 'Train',
    detail: 'Business data, brand voice, logos',
    icon: Search,
  },
  {
    id: 'scripts',
    label: 'Scripts',
    detail: 'Hooks & outlines for every channel',
    icon: Sparkles,
  },
  {
    id: 'approve',
    label: 'Approve',
    detail: 'You sign off before anything posts',
    icon: ShieldCheck,
  },
  {
    id: 'post',
    label: 'Post + ads',
    detail: 'Publish natively, then amplify',
    icon: Megaphone,
  },
] as const

function ContentPipeline({
  step,
  post,
}: {
  step: number
  post: number
}) {
  const active = step % engineStages.length
  const current = feedPosts[post % feedPosts.length]
  const progress = (active + 1) / engineStages.length

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1a17] shadow-[0_0_60px_rgba(15,143,117,0.18)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-paper/70">
          Live content engine
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
          {engineStages[active].label}
        </span>
      </div>

      <div className="relative p-4">
        <div className="relative mb-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-signal to-signal-bright"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
          />
        </div>

        <div className="relative space-y-0">
          {engineStages.map((stage, i) => {
            const Icon = stage.icon
            const isActive = i === active
            const isDone = i < active
            const isUpcoming = i > active

            return (
              <div key={stage.id} className="relative">
                {i < engineStages.length - 1 ? (
                  <motion.div
                    className="absolute left-[1.15rem] top-12 h-[calc(100%-0.5rem)] w-px origin-top bg-white/15"
                    aria-hidden
                  >
                    <motion.div
                      className="w-full bg-signal-bright"
                      initial={{ height: '0%' }}
                      animate={{ height: isDone || isActive ? '100%' : '0%' }}
                      transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                    />
                  </motion.div>
                ) : null}

                <motion.div
                  animate={{
                    opacity: isUpcoming ? 0.45 : 1,
                    x: isActive ? 2 : 0,
                  }}
                  transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
                  className={`relative z-10 flex items-start gap-3 rounded-2xl border px-3 py-3 ${
                    isActive
                      ? 'border-signal/55 bg-signal/20 shadow-[0_0_28px_rgba(15,143,117,0.28)]'
                      : isDone
                        ? 'border-white/15 bg-white/[0.06]'
                        : 'border-white/10 bg-black/15'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isDone
                        ? 'bg-signal text-paper'
                        : isActive
                          ? 'bg-signal-bright text-ink'
                          : 'bg-white/10 text-paper/65'
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-paper">{stage.label}</p>
                      {isActive ? (
                        <motion.span
                          className="rounded-full bg-signal-bright/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-signal-bright"
                          animate={{ opacity: [0.65, 1, 0.65] }}
                          transition={{
                            duration: PRODUCT_MOTION.pulse,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          Now
                        </motion.span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-paper/65">{stage.detail}</p>
                  </div>
                </motion.div>

                {i < engineStages.length - 1 ? <div className="h-2" /> : null}
              </div>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {active >= 2 ? (
            <motion.div
              key={`${current.platform}-${post}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: PRODUCT_MOTION.swap, ease: PRODUCT_EASE }}
              className={`mt-4 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${current.tone} px-3 py-3`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/80">
                  {current.platform}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-paper/55">
                  {active === 2 ? 'Awaiting approval' : 'Ready to publish'}
                </p>
              </div>
              <p className="mt-1.5 text-sm font-medium text-paper">{current.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper/75">{current.caption}</p>
            </motion.div>
          ) : (
            <motion.p
              key="pipeline-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-xs leading-relaxed text-paper/60"
            >
              Train → scripts → human approval → post &amp; product ads. Nothing goes live without
              your yes.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function SocialContentEngine() {
  const [step, setStep] = useState(0)
  const [post, setPost] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => {
        const next = (s + 1) % engineStages.length
        if (next >= 2) {
          setPost((p) => (p + 1) % feedPosts.length)
        }
        return next
      })
    }, PRODUCT_MOTION.contentStepMs)
    return () => clearInterval(t)
  }, [])

  const activeStep = engineStages[Math.min(step, engineStages.length - 1)]

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/55">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />

      <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="overline mb-4 text-signal">
            Automated content engines &amp; product advertising
          </p>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            We build content engines.
            <span className="block text-signal-bright">
              Train. Script. Human-approve. Post anywhere.
            </span>
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            We train an agent on your business data, brand, and logos. It plans scripts and drafts
            for any media platform you use—then a human approves every piece before it goes live.
            Past content becomes product ads when you have it; otherwise we plan a new approach.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {engineStages.map((s, i) => (
              <div
                key={s.id}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  i === step
                    ? 'border-signal/60 bg-signal/15 text-ink'
                    : i < step
                      ? 'border-signal/30 text-signal'
                      : 'border-[var(--line)] text-ink-soft/70'
                }`}
              >
                {i < step ? <Check className="h-3.5 w-3.5" /> : <s.icon className="h-3.5 w-3.5" />}
                {s.label}
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm text-ink-soft">
            <span className="font-medium text-ink">{activeStep.label}:</span> {activeStep.detail}
          </p>

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

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-signal/10 blur-2xl" />
          <div className="relative">
            <ContentPipeline step={step} post={post} />
          </div>
        </div>
      </div>
    </div>
  )
}
