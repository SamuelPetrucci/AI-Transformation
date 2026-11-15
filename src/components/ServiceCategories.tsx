'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Code,
  Bot,
  GraduationCap,
  Megaphone,
  PiggyBank,
  ArrowRight,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { PRODUCT_LINES } from '@/config/products'

const iconByLine: Record<string, typeof Code> = {
  'content-engine': Megaphone,
  'ai-agents': Bot,
  'custom-software': Code,
  'save-on-tech': PiggyBank,
  enablement: GraduationCap,
}

/** Unique generated photos from public/images — one per product line */
const imageByLine: Record<string, string> = {
  'content-engine': '/images/strategy.jpg',
  'ai-agents': '/images/ai-solutions.jpg',
  'custom-software': '/images/integration.jpg',
  'save-on-tech': '/images/analytics.jpg',
  enablement: '/images/consulting.jpg',
}

const serviceCategories = PRODUCT_LINES.map((line) => {
  const icon = iconByLine[line.id] ?? BarChart3
  return {
    icon,
    title: line.name,
    description: line.blurb,
    features: line.products.map((p) => `${p.name} — ${p.price.amount}`),
    color: 'from-signal to-signal',
    bgColor: 'from-ink/50 via-ink/10 to-transparent',
    image: imageByLine[line.id] ?? '/images/services-hero-bg.jpg',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-ink text-lg font-semibold">Products in this line</h4>
        <ul className="list-disc list-inside space-y-2 text-ink-soft">
          {line.products.map((p) => (
            <li key={p.id}>
              <strong className="text-ink">
                {p.name} ({p.price.amount})
              </strong>
              {' — '}
              {p.job}. {p.outcome}.
              {p.price.note ? ` ${p.price.note}.` : ''}
            </li>
          ))}
        </ul>
        <p className="text-ink-soft">
          Every product is scoped to save time, cut cost, grow demand, or help you own more of the
          stack—including named maintenance and support retainers when you want ongoing care.
        </p>
      </div>
    ),
  }
})

export default function ServiceCategories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setOpenIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setOpenIndex(null)
  }

  return (
    <section id="service-categories" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="overline mb-4">Product offers</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Five product lines. Clear outcomes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Five product lines—Content Engine, AI Agents, Custom Software, Save on Tech, and
            Training & Support—each with named products and clear outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openModal(index)}
              className="group rounded-3xl border border-[var(--line)] bg-white/55 p-6 text-left backdrop-blur-sm transition hover:border-signal/40"
            >
              <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor}`} />
                <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-signal">
                  <category.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{category.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{category.description}</p>
              <ul className="mt-4 space-y-1.5">
                {category.features.slice(0, 3).map((f) => (
                  <li key={f} className="text-xs text-ink-soft/80">
                    · {f}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-signal">
                View products
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {isModalOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--line)] bg-paper p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {serviceCategories[openIndex].title}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-ink-soft hover:border-signal/40"
              >
                Close
              </button>
            </div>
            <div className="relative mb-5 h-40 overflow-hidden rounded-2xl">
              <Image
                src={serviceCategories[openIndex].image}
                alt={serviceCategories[openIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
            {serviceCategories[openIndex].details}
          </div>
        </div>
      )}
    </section>
  )
}
