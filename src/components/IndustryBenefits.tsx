'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description:
      'Automate repetitive tasks and streamline workflows to boost productivity by up to 80%.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description:
      'Reduce manual processing time and focus on high-value activities that drive growth.',
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Lower operational costs through automation and improved resource allocation.',
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description:
      'Provide faster, more personalized service that improves customer satisfaction.',
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Implement industry-grade protection and monitoring for your business data.',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description:
      'Get your custom solution up and running quickly with our streamlined development process.',
  },
]

export default function IndustryBenefits() {
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
            Why industry teams choose us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Why Choose Our Tailored Solutions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            We focus on understanding your unique business needs and delivering custom solutions that
            scale with your growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
