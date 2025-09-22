'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.avif"
          alt="AI Transformation - Business Intelligence and Automation"
          fill
          className="object-cover opacity-10"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Primary Nebula Effects - More Pronounced */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/12 to-pink-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Secondary Orbital Elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-emerald-400/12 to-green-400/12 rounded-full blur-lg"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating Particles - More Pronounced */}
        <motion.div 
          className="absolute top-1/4 right-1/3 w-1 h-1 bg-gradient-to-r from-blue-400/80 to-cyan-400/80 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-gradient-to-r from-purple-400/70 to-pink-400/70 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400/60 to-orange-400/60 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-gradient-to-r from-green-400/65 to-emerald-400/65 rounded-full"
          animate={{
            y: [0, -18, 0],
            opacity: [0.55, 0.85, 0.55],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-indigo-400/55 to-blue-400/55 rounded-full"
          animate={{
            y: [0, -22, 0],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* More Pronounced Pulse Effects */}
        <motion.div 
          className="absolute top-1/5 left-1/5 w-2 h-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/5 right-1/5 w-1.5 h-1.5 bg-gradient-to-r from-cyan-500/45 to-blue-500/45 rounded-full"
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-1 h-1 bg-gradient-to-r from-pink-500/40 to-red-500/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Ambient Light Rays */}
        <motion.div 
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/8 to-transparent"
          animate={{
            opacity: [0, 0.08, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-3xl">AI</span>
            </div>
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-gray-300 bg-clip-text text-transparent">
              Transformation
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            Transform Your Business with Intelligent AI Solutions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge AI solutions that drive business growth and operational efficiency. 
            From intelligent automation to data analytics, we help businesses leverage the power of artificial intelligence 
            to stay ahead in today&apos;s competitive landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToBooking}
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">Reliable</div>
            <div className="text-gray-400">Development Partner</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">Fast</div>
            <div className="text-gray-400">Turnaround Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
