'use client'

import { motion } from 'framer-motion'
import { BarChart3, Code, Bot, Users, Megaphone, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const serviceCategories = [
  {
    icon: Code,
    title: 'Custom Development & AI Integration',
    description: 'Transform your ideas into powerful digital solutions with custom development and seamless AI integration.',
    features: [
      'Custom Landing Pages with AI Integration',
      'POS Systems & Payment Solutions',
      'Development Partnerships',
      'Idea to Solution Bridging',
      'Full-Stack Development'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-500/10 to-blue-600/10',
    imagePlaceholder: '/images/integration.avif',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-white text-lg font-semibold">What we deliver</h4>
        <p className="text-gray-400">We design, build, and integrate custom web apps, landing pages, and POS workflows with production-grade architectures and CI/CD. Our team bridges the gap between vision and execution—owning the technical roadmap and delivery.</p>
        <h5 className="text-white font-semibold">Typical outcomes</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Faster go-to-market with scalable foundations</li>
          <li>Seamless AI integrations (chatbots, assistants, automations)</li>
          <li>Modern UX with measurable conversion improvements</li>
        </ul>
        <h5 className="text-white font-semibold">Tech we use</h5>
        <p className="text-gray-400">Next.js, TypeScript, Node.js, Supabase/Postgres, vector databases, OpenAI, Stripe, Vercel.</p>
      </div>
    )
  },
  {
    icon: Bot,
    title: 'AI-Powered Business Solutions',
    description: 'Leverage artificial intelligence to automate and enhance your business operations.',
    features: [
      'AI Receptionists & Chatbots',
      'AI Research Assistants',
      'Automated Report Generation',
      'Intelligent Project Management',
      'Smart Business Automation'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-500/10 to-purple-600/10',
    imagePlaceholder: '/images/ai-solutions.webp',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-white text-lg font-semibold">Use cases</h4>
        <p className="text-gray-400">AI agents handle repetitive tasks, triage requests, summarize communications, and assist teams with research and structured workflows—24/7 with consistent quality.</p>
        <h5 className="text-white font-semibold">Capabilities</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Natural language chat for customer and internal support</li>
          <li>Automated report generation and meeting notes</li>
          <li>Task routing, ownership, and follow‑ups</li>
        </ul>
        <h5 className="text-white font-semibold">Benefits</h5>
        <p className="text-gray-400">Lower handle time, higher customer satisfaction, and better team focus on high‑value work.</p>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Dashboarding',
    description: 'Turn your data into actionable insights with comprehensive analytics and intuitive dashboards.',
    features: [
      'Data Analytics & Insights',
      'Custom Dashboard Development',
      'Data Consolidation',
      'Business Intelligence',
      'Real-time Reporting'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-500/10 to-green-600/10',
    imagePlaceholder: '/images/analytics.avif',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-white text-lg font-semibold">From data to decisions</h4>
        <p className="text-gray-400">We unify data sources and build dashboards that surface KPIs, trends, and alerts—so leaders can act quickly and confidently.</p>
        <h5 className="text-white font-semibold">Integrations</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>CRMs, POS, spreadsheets, databases, and third‑party APIs</li>
          <li>Scheduled pipelines with data quality checks</li>
          <li>Role‑based access and multi‑tenant views</li>
        </ul>
      </div>
    )
  },
  {
    icon: Users,
    title: 'Knowledge Base & Consulting',
    description: 'Expert guidance and ongoing support to ensure your AI solutions deliver maximum value.',
    features: [
      'Knowledge Base Consulting',
      'Solution Implementation',
      'Ongoing Support & Maintenance',
      'AI Strategy Development',
      'Training & Documentation'
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-500/10 to-red-600/10',
    imagePlaceholder: '/images/consulting.avif',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-white text-lg font-semibold">What is an AI Knowledge Base?</h4>
        <p className="text-gray-400">An AI knowledge base is your company’s source of truth—policies, SOPs, product docs, FAQs, specs—structured so AI can reliably find and use it to answer questions and automate tasks.</p>
        <h5 className="text-white font-semibold">Why your AI needs business context</h5>
        <p className="text-gray-400">Out‑of‑the‑box models don’t know your offerings, rules, or tone. Adding context ensures accurate, brand‑aligned, compliant answers.</p>
        <h5 className="text-white font-semibold">RAG (Retrieval‑Augmented Generation)</h5>
        <p className="text-gray-400">At answer time, the AI searches your private content (docs/wiki/DB), retrieves the most relevant passages, and grounds the response—often with citations. Benefits: up‑to‑date, auditable, and precise.</p>
        <h5 className="text-white font-semibold">CAG (Context‑Augmented Generation)</h5>
        <p className="text-gray-400">We enrich prompts with dynamic context—user role, account status, recent tickets, catalog, and policy rules—so answers adapt to who’s asking and what’s happening now.</p>
        <h5 className="text-white font-semibold">What we implement</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Content ingestion (PDFs, Google Docs, Notion/Confluence, CSV/DB) and normalization</li>
          <li>Embeddings + vector search with access controls and safety guardrails</li>
          <li>Prompt routing, policies, citations, confidence scoring, and feedback loops</li>
          <li>Monitoring and continuous updates to keep answers fresh</li>
        </ul>
        <h5 className="text-white font-semibold">Ideal use cases</h5>
        <p className="text-gray-400">Customer support, internal IT/HR help desk, sales enablement, onboarding, compliance Q&A, SOP guidance.</p>
      </div>
    )
  },
  {
    icon: Megaphone,
    title: 'Social Media Automation & Advertising',
    description: 'Active social presence and optional Meta ads management—Starter Social, Social Growth, or Facebook Ads + Social.',
    features: [
      'Starter Social — $149/month',
      'Social Growth — $299/month (recommended)',
      'Facebook Ads + Social — $499/month',
      'AI-assisted captions and graphics',
      'Optional AI automation add-ons'
    ],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'from-violet-500/10 to-violet-600/10',
    imagePlaceholder: '/images/services-hero-bg.webp',
    details: (
      <div className="text-left space-y-4">
        <h4 className="text-white text-lg font-semibold">Packages</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li><strong className="text-white">Starter Social ($149/mo)</strong> — 8 posts, AI captions/graphics, one platform (Facebook or Instagram)</li>
          <li><strong className="text-white">Social Growth ($299/mo)</strong> — 12 posts, Facebook + Instagram, content calendar, basic performance report</li>
          <li><strong className="text-white">Facebook Ads + Social ($499/mo)</strong> — Social Growth essentials plus one Meta campaign; client pays ad spend separately</li>
        </ul>
        <h5 className="text-white font-semibold">Optional AI automation (separate)</h5>
        <p className="text-gray-400">Monitoring &amp; maintenance ($99–$299/mo), AI receptionist, automated lead follow-up, website/CRM integration, and custom AI agents—quoted as needed.</p>
      </div>
    )
  }
]

export default function ServiceCategories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setOpenIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setOpenIndex(null), 200)
  }

  const activeCategory = openIndex !== null ? serviceCategories[openIndex] : null
  // const ActiveIcon = activeCategory ? activeCategory.icon : null

  return (
    <section id="service-categories" className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="overline mb-4">Packaged under one positioning</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Services that fit the job
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-400">
            Save time, reduce costs, and grow—through custom software, AI automation, and modern
            technology solutions. Pick the engagement size that matches your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-panel h-full rounded-3xl p-8 transition-all duration-300 hover:border-violet-400/30 hover:scale-[1.01]">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Service Image on card */}
                <div className="relative mb-6 rounded-xl overflow-hidden h-48">
                  <Image
                    src={category.imagePlaceholder}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(index)}
                  className="group/btn w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-3xl bg-gray-900/95 border border-gray-700/60 rounded-2xl p-6 shadow-2xl max-h-[85vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 id="service-modal-title" className="text-2xl font-bold text-white">
                {activeCategory.title}
              </h3>
              <button onClick={closeModal} aria-label="Close" className="text-gray-400 hover:text-white">✕</button>
            </div>

            {/* Service Image */}
            <div className="relative mb-6 rounded-xl overflow-hidden h-48 flex-shrink-0">
              <Image
                src={activeCategory.imagePlaceholder}
                alt={activeCategory.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="prose prose-invert max-w-none flex-1 overflow-y-auto pr-2">
              {activeCategory.details}
            </div>

            {/* Footer CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end flex-shrink-0">
              <button
                onClick={() => (window.location.href = '/#booking')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get a Free Consultation
              </button>
              <button onClick={closeModal} className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
