'use client'

import { motion } from 'framer-motion'
import { Shield, Home, DollarSign, Stethoscope, Scale, ShoppingCart } from 'lucide-react'

const industries = [
  {
    icon: Shield,
    name: 'Insurance Brokers',
    description: 'Automate claims processing and policy management',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Home,
    name: 'Real Estate Agents',
    description: 'Streamline property management and lead generation',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: DollarSign,
    name: 'Accounting Firms',
    description: 'Automate bookkeeping and financial reporting',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Stethoscope,
    name: 'Medical Offices',
    description: 'Improve patient care and appointment scheduling',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Scale,
    name: 'Law Firms',
    description: 'Automate document review and case management',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ShoppingCart,
    name: 'Retail Businesses',
    description: 'Optimize inventory and customer service',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function IndustriesHero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/4 to-pink-500/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                     <h1 className="text-5xl md:text-7xl font-bold mb-6">
             <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-gray-300 bg-clip-text text-transparent">
               Tailored AI Solutions for Any Industry
             </span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
             We build custom AI solutions for growing companies ready to go digital, regardless of your industry.
           </p>
           <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
             From insurance to retail, healthcare to legal services - we create tailored solutions that scale fast with continued support.
           </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}
