'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface QuickReply {
  text: string
  action: 'response' | 'scroll' | 'navigate'
  value: string
}

const businessContext = {
  company: 'AI Transformation LLC',
  services: [
    'AI Strategy & Implementation',
    'Business Process Automation', 
    'Data Analytics & Insights',
    'Industry-Grade Protection'
  ],
  industries: [
    'Insurance Brokers',
    'Real Estate Agents', 
    'Accounting Firms',
    'Medical Offices',
    'Law Firms',
    'Retail Businesses'
  ],
  benefits: [
    'Custom tailored solutions',
    'Fast implementation',
    'Continued support',
    'Industry-specific expertise'
  ]
}

const botResponses = {
  greeting: `Hi! I'm your AI assistant from ${businessContext.company}. I can help you learn about our AI solutions and services. What would you like to know?`,
  
  services: `We offer ${businessContext.services.length} main services:\n\n${businessContext.services.map(service => `• ${service}`).join('\n')}\n\nWould you like to learn more about any specific service?`,
  
  industries: `We serve ${businessContext.industries.length} different industries:\n\n${businessContext.industries.map(industry => `• ${industry}`).join('\n')}\n\nWe build custom solutions for any industry that wants to go digital!`,
  
  pricing: "We offer custom pricing based on your specific needs and project scope. The best way to get an accurate quote is to schedule a free consultation where we can discuss your requirements in detail.",
  
  consultation: "Great! I'd be happy to help you schedule a consultation. You can either:\n\n• Book directly through our calendar\n• Fill out our contact form\n\nWhich would you prefer?",
  
  contact: "You can reach us through:\n\n• 📧 Email: info@aitransformationllc.com\n• 📞 Phone: (555) 123-4567\n• 📅 Book a consultation\n• 📝 Contact form\n\nWhat's the best way to help you?",
  
  default: "I'm here to help! You can ask me about:\n\n• Our services\n• Industries we serve\n• Pricing\n• Booking a consultation\n• Contact information"
}

const quickReplies: QuickReply[] = [
  { text: "Tell me about your services", action: 'response', value: 'services' },
  { text: "What industries do you serve?", action: 'response', value: 'industries' },
  { text: "How much do you charge?", action: 'response', value: 'pricing' },
  { text: "Book a consultation", action: 'scroll', value: 'booking' },
  { text: "Contact information", action: 'response', value: 'contact' }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: botResponses.greeting,
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = (reply: QuickReply) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Handle action
    if (reply.action === 'scroll') {
      const element = document.getElementById(reply.value)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (reply.action === 'response') {
      handleBotResponse(reply.value)
    }
  }

  const handleBotResponse = (responseType: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[responseType as keyof typeof botResponses] || botResponses.default,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simple keyword-based response system
    const lowerInput = inputValue.toLowerCase()
    let responseType = 'default'

    if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
      responseType = 'services'
    } else if (lowerInput.includes('industry') || lowerInput.includes('who do you serve')) {
      responseType = 'industries'
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
      responseType = 'pricing'
    } else if (lowerInput.includes('consult') || lowerInput.includes('meeting') || lowerInput.includes('book')) {
      responseType = 'consultation'
    } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      responseType = 'contact'
    }

    handleBotResponse(responseType)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User size={12} className="text-white" />
                      ) : (
                        <Bot size={12} className="text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-100 border border-gray-700/50'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 text-xs bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {reply.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
