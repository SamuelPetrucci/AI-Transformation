'use client'

import { motion } from 'framer-motion'
import { Award, Clock, MessageSquare, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified technology professionals with proven solutions for enterprise transformation.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Tailored SMB Solutions',
    description: 'We consult closely with small and medium businesses to create custom solutions that fit your unique needs and budget.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Clock,
    title: 'Continuous Support',
    description: 'Ongoing improvement and support to ensure your tech operations run smoothly and efficiently.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Tech Operations Made Easy',
    description: 'We make navigating complex tech operations a breeze, so you can focus on growing your business.',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function WhyChooseUs() {
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
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
