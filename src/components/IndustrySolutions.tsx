'use client'

import { motion } from 'framer-motion'
import { Shield, Home, DollarSign, Stethoscope, Scale, ShoppingCart, CheckCircle } from 'lucide-react'

const industrySolutions = [
  {
    icon: Shield,
    name: 'Insurance Brokers',
    color: 'from-blue-500 to-blue-600',
    description: 'Enhance customer trust and streamline operations with AI-powered solutions.',
    solutions: [
      '24/7 customer service chatbots for instant support',
      'Automated claims processing for faster resolution',
      'Personalized policy recommendations to build trust',
      'Proactive fraud detection to protect customers'
    ]
  },
  {
    icon: Home,
    name: 'Real Estate Agents',
    color: 'from-green-500 to-green-600',
    description: 'Build lasting client relationships and trust through intelligent automation.',
    solutions: [
      'Personalized client communication and follow-ups',
      'Automated property matching for better client satisfaction',
      'Virtual tours and 3D visualization to enhance trust',
      'Market insights to provide expert guidance'
    ]
  },
  {
    icon: DollarSign,
    name: 'Accounting Firms',
    color: 'from-yellow-500 to-yellow-600',
    description: 'Strengthen client relationships and build trust through reliable automation.',
    solutions: [
      'Automated client communication and updates',
      'Real-time financial reporting for transparency',
      'Secure document management to protect client data',
      'Proactive tax planning to demonstrate value'
    ]
  },
  {
    icon: Stethoscope,
    name: 'Medical Offices',
    color: 'from-red-500 to-red-600',
    description: 'Enhance patient trust and care through intelligent automation.',
    solutions: [
      'Personalized patient communication and reminders',
      'Streamlined appointment scheduling for better experience',
      'Secure patient data management to build trust',
      'Automated follow-ups to show care and attention'
    ]
  },
  {
    icon: Scale,
    name: 'Law Firms',
    color: 'from-purple-500 to-purple-600',
    description: 'Build client confidence and trust through intelligent legal solutions.',
    solutions: [
      'Automated client updates and case progress tracking',
      'Document review automation for accuracy and trust',
      'Secure case management to protect client confidentiality',
      'Proactive legal research to demonstrate expertise'
    ]
  },
  {
    icon: ShoppingCart,
    name: 'Retail Businesses',
    color: 'from-orange-500 to-orange-600',
    description: 'Enhance customer loyalty and trust through personalized retail experiences.',
    solutions: [
      'Personalized customer recommendations to build trust',
      '24/7 customer service chatbots for instant support',
      'Automated inventory management for reliable service',
      'Customer loyalty programs to strengthen relationships'
    ]
  }
]

export default function IndustrySolutions() {
  return (
    <section id="industry-solutions" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              Industry-Specific AI Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how AI can transform your specific industry with tailored solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industrySolutions.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mr-4`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {industry.description}
                </p>

                                 <div className="space-y-3">
                   {industry.solutions.map((solution, idx) => (
                     <div key={idx} className="flex items-center space-x-3">
                       <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                       <span className="text-gray-300 text-sm">{solution}</span>
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
