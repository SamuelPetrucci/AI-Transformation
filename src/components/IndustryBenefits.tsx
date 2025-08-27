'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 80%.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce manual processing time and focus on high-value activities that drive growth.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Lower operational costs through automation and improved resource allocation.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Provide faster, more personalized service that improves customer satisfaction.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Implement industry-grade protection and monitoring for your business data.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description: 'Get your custom solution up and running quickly with our streamlined development process.',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function IndustryBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
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
              Why Choose Our Tailored Solutions?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We focus on understanding your unique business needs and delivering custom solutions that scale with your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
