'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react'

export default function ServiceCTA() {
  const scrollToBooking = () => {
    window.location.href = '/#booking'
  }

  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a free consultation to discuss your project needs',
      action: 'Book Now',
      onClick: scrollToBooking
    },
    {
      icon: MessageCircle,
      title: 'Chat with AI Assistant',
      description: 'Get instant answers about our services and capabilities',
      action: 'Start Chat',
      onClick: () => {
        // This will be handled by the chatbot component
        const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLElement
        if (chatButton) {
          chatButton.click()
        }
      }
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      description: 'Speak with our team for immediate assistance',
      action: 'Call Now',
      onClick: () => window.location.href = 'tel:+15551234567'
    }
  ]

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
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI services can bring your ideas to life and drive meaningful business impact.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {method.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <button
                  onClick={method.onClick}
                  className="group/btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Start Your AI Transformation Journey Today
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our AI solutions. 
              From custom development to comprehensive business automation, we&apos;re here to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToBooking}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <div className="text-gray-400 text-sm">
                <span className="text-blue-400 font-semibold">✓</span> Free consultation
                <span className="mx-2">•</span>
                <span className="text-blue-400 font-semibold">✓</span> No commitment required
                <span className="mx-2">•</span>
                <span className="text-blue-400 font-semibold">✓</span> Expert guidance
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

