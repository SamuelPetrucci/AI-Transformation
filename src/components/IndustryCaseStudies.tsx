'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Insurance Broker',
    title: 'Claims Processing Automation',
    description: 'Reduced claims processing time by 70% and improved customer satisfaction scores.',
    metrics: [
      { label: 'Time Reduction', value: '70%', icon: TrendingUp },
      { label: 'Customer Satisfaction', value: '+45%', icon: Users },
      { label: 'Cost Savings', value: '$2.3M', icon: DollarSign }
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    industry: 'Real Estate Agency',
    title: 'Lead Generation & Management',
    description: 'Increased lead conversion rates by 50% and reduced administrative workload.',
    metrics: [
      { label: 'Lead Conversion', value: '+50%', icon: TrendingUp },
      { label: 'Time Saved', value: '60%', icon: Users },
      { label: 'Revenue Growth', value: '+35%', icon: DollarSign }
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    industry: 'Medical Practice',
    title: 'Patient Care Optimization',
    description: 'Improved patient scheduling efficiency and reduced no-show rates significantly.',
    metrics: [
      { label: 'No-Show Reduction', value: '60%', icon: TrendingUp },
      { label: 'Patient Satisfaction', value: '+40%', icon: Users },
      { label: 'Operational Costs', value: '-25%', icon: DollarSign }
    ],
    color: 'from-red-500 to-red-600'
  }
]

export default function IndustryCaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how AI solutions have transformed businesses across different industries with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-400 font-medium">{study.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{study.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {study.description}
                </p>

                <div className="space-y-3">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <metric.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{metric.label}</span>
                      </div>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
