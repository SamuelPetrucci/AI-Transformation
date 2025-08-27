'use client'

import { motion } from 'framer-motion'
import { Play, Settings, TrendingUp, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Play,
    title: 'Discovery & Assessment',
    description: 'We analyze your current business processes and identify opportunities for AI integration.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive AI strategy tailored to your business goals and objectives.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Implementation & Training',
    description: 'Deploy AI solutions and provide comprehensive training for your team.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CheckCircle,
    title: 'Optimization & Support',
    description: 'Continuous monitoring, optimization, and ongoing support to ensure maximum ROI.',
    color: 'from-teal-500 to-teal-600'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
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
              How We Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven process ensures successful AI transformation from concept to implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-2xl font-bold text-blue-400 mb-2">0{index + 1}</div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
