'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Calendar, 
  BarChart3, 
  ShoppingCart, 
  Globe, 
  Play,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Eye,
  Zap
} from 'lucide-react'

const demoServices = [
  {
    icon: Calendar,
    title: 'Smart Booking System',
    description: 'AI-powered appointment scheduling with automated reminders and calendar integration.',
    features: ['Automated Scheduling', 'Calendar Sync', 'Reminder System', 'Payment Integration'],
    color: 'from-blue-500 to-blue-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics Dashboard',
    description: 'Real-time business insights with customizable dashboards and automated reporting.',
    features: ['Real-time Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
    color: 'from-green-500 to-green-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  },
  {
    icon: Bot,
    title: 'AI Customer Assistant',
    description: 'Intelligent chatbot that handles customer inquiries and provides 24/7 support.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'CRM Integration'],
    color: 'from-purple-500 to-purple-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  },
  {
    icon: ShoppingCart,
    title: 'POS System',
    description: 'Complete point-of-sale solution with inventory management and sales analytics.',
    features: ['Inventory Management', 'Payment Processing', 'Sales Analytics', 'Customer Tracking'],
    color: 'from-orange-500 to-orange-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  },
  {
    icon: Globe,
    title: 'Custom Website Builder',
    description: 'AI-powered website creation with responsive design and SEO optimization.',
    features: ['AI Design Generation', 'Responsive Templates', 'SEO Optimization', 'Easy Management'],
    color: 'from-teal-500 to-teal-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Streamline operations with intelligent automation and workflow optimization.',
    features: ['Workflow Automation', 'Process Optimization', 'Integration Management', 'Performance Monitoring'],
    color: 'from-red-500 to-red-600',
    demoUrl: '#',
    status: 'Live Demo Available'
  }
]

export default function ProofOfConcept() {
  const [selectedDemo, setSelectedDemo] = useState(demoServices[0])

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
              Proof of Concept Demos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience our AI solutions in action. Each demo showcases real capabilities 
            that can be customized for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Choose a Demo to Explore</h3>
            {demoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setSelectedDemo(service)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left group ${
                    selectedDemo.title === service.title
                      ? 'border-blue-500/50 bg-blue-500/10'
                      : 'border-gray-700/50 bg-gray-900/50 hover:border-gray-600/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-xs font-medium">{service.status}</span>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                      selectedDemo.title === service.title ? 'text-blue-400 translate-x-1' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              key={selectedDemo.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${selectedDemo.color} rounded-xl flex items-center justify-center`}>
                  <selectedDemo.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedDemo.title}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm font-medium">Live Demo</span>
                  </div>
                </div>
              </div>

              {/* Interactive Demo Interface */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 mb-6 min-h-[300px]">
                {selectedDemo.title === 'Smart Booking System' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live Booking Demo</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Schedule Consultation</h5>
                          <p className="text-gray-600 text-sm">Available slots for next week</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <button className="bg-blue-50 border border-blue-200 text-blue-700 py-2 px-3 rounded text-sm hover:bg-blue-100">
                          Mon 2:00 PM
                        </button>
                        <button className="bg-blue-50 border border-blue-200 text-blue-700 py-2 px-3 rounded text-sm hover:bg-blue-100">
                          Tue 10:00 AM
                        </button>
                        <button className="bg-gray-100 border border-gray-200 text-gray-500 py-2 px-3 rounded text-sm">
                          Wed 3:00 PM
                        </button>
                        <button className="bg-blue-50 border border-blue-200 text-blue-700 py-2 px-3 rounded text-sm hover:bg-blue-100">
                          Thu 1:00 PM
                        </button>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Book This Slot
                      </button>
                    </div>
                  </div>
                )}

                {selectedDemo.title === 'Data Analytics Dashboard' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live Analytics Demo</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">1,247</div>
                          <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">94.2%</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="text-center text-sm text-gray-600 mt-2">
                        Real-time data visualization
                      </div>
                    </div>
                  </div>
                )}

                {selectedDemo.title === 'AI Customer Assistant' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live Chat Demo</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                            Hi! How can I help you today?
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-xs">
                            I need help with my account
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                            I'd be happy to help! What specific issue are you experiencing?
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <input 
                          type="text" 
                          placeholder="Type your message..." 
                          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {selectedDemo.title === 'POS System' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live POS Demo</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-sm">Coffee $3.50</button>
                        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-sm">Sandwich $8.99</button>
                        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-sm">Salad $6.50</button>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Subtotal:</span>
                          <span>$18.99</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span>Tax:</span>
                          <span>$1.52</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                          <span>Total:</span>
                          <span>$20.51</span>
                        </div>
                        <button className="w-full bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700">
                          Process Payment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {selectedDemo.title === 'Custom Website Builder' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live Website Builder</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex space-x-2 mb-4">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Header</button>
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Content</button>
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Footer</button>
                      </div>
                      <div className="h-32 bg-gray-100 rounded flex items-center justify-center mb-4">
                        <Globe className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="text-center text-sm text-gray-600">
                        Drag and drop to build your website
                      </div>
                    </div>
                  </div>
                )}

                {selectedDemo.title === 'Business Automation' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Live Automation Demo</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Email automation active</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Inventory sync running</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Report generation pending</span>
                        </div>
                      </div>
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded mt-4 hover:bg-purple-700">
                        Configure Automation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                {selectedDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Full Demo</span>
                </button>
                <button className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Custom Quote</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Custom Solution?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              These demos showcase just a fraction of what we can build for your business. 
              Let&apos;s discuss how we can create a tailored solution that perfectly fits your needs.
            </p>
            <button
              onClick={() => window.location.href = '/#booking'}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

