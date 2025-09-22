'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function ServicesHero() {
  const scrollToServices = () => {
    const element = document.getElementById('service-categories')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero-bg.webp"
          alt="Services background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-blue-400 font-semibold text-lg">Comprehensive AI Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-gray-300 bg-clip-text text-transparent">
              Bring Ideas to Impactful Solutions
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            From Custom Development to AI-Powered Business Solutions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            We specialize in transforming your business ideas into powerful, AI-driven solutions. 
            From custom landing pages and POS systems to AI receptionists and data analytics, 
            we provide comprehensive development partnerships that bridge the gap between concept and reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToServices}
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">Custom</div>
            <div className="text-gray-400">Development Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">AI-Powered</div>
            <div className="text-gray-400">Business Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">Full-Service</div>
            <div className="text-gray-400">Development Partnership</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
