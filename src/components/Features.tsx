'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Shield, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Custom Development & AI Integration',
    description: 'Custom landing pages with AI integration, POS systems, and development partnerships that bridge the gap between idea and solution.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'AI-Powered Business Solutions',
    description: 'AI receptionists, research assistants, automated reporting, and intelligent project management systems.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Dashboarding',
    description: 'Comprehensive data analytics, consolidation through advanced dashboards, and actionable business insights.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Knowledge Base & Consulting',
    description: 'Expert knowledge base consulting, solution implementation, and ongoing support to ensure your success.',
    color: 'from-red-500 to-red-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
              Core Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From custom landing pages with AI integration to comprehensive development partnerships, we bring ideas to impactful solutions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => window.location.href = '/services'}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
