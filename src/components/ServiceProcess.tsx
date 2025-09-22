'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Cog, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business needs, challenges, and goals through comprehensive consultation.',
    details: [
      'Business analysis and requirements gathering',
      'Current system assessment',
      'Goal definition and success metrics',
      'Budget and timeline planning'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive strategy and detailed plan tailored to your specific business objectives.',
    details: [
      'AI solution architecture design',
      'Technology stack selection',
      'Implementation roadmap creation',
      'Risk assessment and mitigation'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Cog,
    title: 'Development & Integration',
    description: 'Build and integrate your custom AI solutions with seamless implementation and testing.',
    details: [
      'Custom development and coding',
      'AI model training and integration',
      'System testing and quality assurance',
      'Performance optimization'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    description: 'Deploy your solutions with comprehensive training and support for smooth operation.',
    details: [
      'Production deployment',
      'Team training and documentation',
      'Go-live support and monitoring',
      'Performance tracking and optimization'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    description: 'Continuous support, monitoring, and improvement to ensure long-term success and ROI.',
    details: [
      '24/7 monitoring and maintenance',
      'Regular performance reviews',
      'Feature updates and enhancements',
      'Ongoing optimization and scaling'
    ],
    color: 'from-teal-500 to-teal-600'
  }
]

export default function ServiceProcess() {
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
              Our Development Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.color} rounded-full flex-shrink-0 mt-2`} />
                      <span className="text-gray-500 text-xs leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              From Idea to Impactful Solution
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our comprehensive process ensures that every project is delivered on time, within budget, 
              and exceeds expectations. We work closely with you at every step to ensure your vision 
              becomes a reality that drives real business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

