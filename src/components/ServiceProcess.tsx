'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Cog, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description:
      'We start by understanding your business needs, challenges, and goals through comprehensive consultation.',
    details: [
      'Business analysis and requirements gathering',
      'Current system assessment',
      'Goal definition and success metrics',
      'Budget and timeline planning',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description:
      'Develop a comprehensive strategy and detailed plan tailored to your specific business objectives.',
    details: [
      'AI solution architecture design',
      'Technology stack selection',
      'Implementation roadmap creation',
      'Risk assessment and mitigation',
    ],
  },
  {
    icon: Cog,
    title: 'Development & Integration',
    description:
      'Build and integrate your custom AI solutions with seamless implementation and testing.',
    details: [
      'Custom development and coding',
      'AI model training and integration',
      'System testing and quality assurance',
      'Performance optimization',
    ],
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    description:
      'Deploy your solutions with comprehensive training and support for smooth operation.',
    details: [
      'Production deployment',
      'Team training and documentation',
      'Go-live support and monitoring',
      'Performance tracking and optimization',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    description:
      'Continuous support, monitoring, and improvement to ensure long-term success and ROI.',
    details: [
      '24/7 monitoring and maintenance',
      'Regular performance reviews',
      'Feature updates and enhancements',
      'Ongoing optimization and scaling',
    ],
  },
]

export default function ServiceProcess() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overline mb-4"
          >
            How delivery works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            A clear path from discovery to ongoing support—so you always know what happens next.
          </motion.p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel grid grid-cols-1 gap-6 rounded-3xl p-6 md:grid-cols-[auto_1fr_1.2fr] md:items-start"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-violet-300">Step 0{index + 1}</p>
                <h3 className="font-display mt-1 text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{step.description}</p>
              </div>
              <ul className="space-y-2">
                {step.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
