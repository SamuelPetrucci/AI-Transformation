'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  metadata?: {
    intent?: string
    confidence?: number
    extracted_data?: Record<string, unknown>
  }
}

interface QuickReply {
  text: string
  action: 'response' | 'scroll' | 'navigate'
  value: string
}

interface ExtractedData {
  name?: string
  email?: string
  phone?: string
  company?: string
  industry?: string
  budget?: string
  timeline?: string
  projectType?: string
  requirements?: string
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
  const [showNudge, setShowNudge] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant from AI Transformation LLC. I can help you learn about our AI solutions and services. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [extractedData, setExtractedData] = useState<ExtractedData>({})
  const [leadScore, setLeadScore] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea based on content
  useEffect(() => {
    if (!inputRef.current) return
    const el = inputRef.current
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 160) + 'px' // cap at ~8 lines
  }, [inputValue])

  // One-time subtle nudge to notify availability
  useEffect(() => {
    try {
      const shown = typeof window !== 'undefined' && sessionStorage.getItem('chat_nudge_shown')
      if (!shown) {
        const t = setTimeout(() => {
          setShowNudge(true)
          // Hide the nudge after a few seconds
          const h = setTimeout(() => setShowNudge(false), 6000)
          return () => clearTimeout(h)
        }, 2500)
        return () => clearTimeout(t)
      }
    } catch {
      // no-op if sessionStorage unavailable
    }
  }, [])

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
      let responseText = "I'm here to help! You can ask me about our services, industries we serve, pricing, or booking a consultation."
      
      if (responseType === 'services') {
        responseText = "We offer 4 main services:\n\n• AI Strategy & Implementation\n• Business Process Automation\n• Data Analytics & Insights\n• Industry-Grade Protection\n\nWould you like to learn more about any specific service?"
      } else if (responseType === 'industries') {
        responseText = "We serve 6 different industries:\n\n• Insurance Brokers\n• Real Estate Agents\n• Accounting Firms\n• Medical Offices\n• Law Firms\n• Retail Businesses\n\nWe build custom solutions for any industry that wants to go digital!"
      } else if (responseType === 'pricing') {
        responseText = "We offer custom pricing based on your specific needs and project scope. The best way to get an accurate quote is to schedule a free consultation where we can discuss your requirements in detail."
      } else if (responseType === 'consultation') {
        responseText = "Great! I'd be happy to help you schedule a consultation. You can either:\n\n• Book directly through our calendar\n• Fill out our contact form\n\nWhich would you prefer?"
      } else if (responseType === 'contact') {
        responseText = "You can reach us through:\n\n• 📧 Email: info@aitransformationllc.com\n• 📞 Phone: (555) 123-4567\n• 📅 Book a consultation\n• 📝 Contact form\n\nWhat's the best way to help you?"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const sendMessageToAPI = async (userMessage: Message) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          sessionId,
          conversationId,
          messages: messages.concat([userMessage])
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setConversationId(data.conversationId)
      
      if (data.extractedData) {
        setExtractedData(prev => ({ ...prev, ...data.extractedData }))
      }
      
      if (data.leadScore) {
        setLeadScore(data.leadScore)
      }

      // If we have enough information, suggest booking
      if (data.isQualified && data.extractedData?.email && !messages.some(m => m.text.includes('schedule') || m.text.includes('book'))) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: "Based on our conversation, it sounds like you might be ready for a consultation! Would you like me to help you schedule a meeting with our team?",
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, followUpMessage])
        }, 2000)
      }

    } catch (error) {
      console.error('Error sending message to API:', error)
      
      // Fallback to simple response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Could you please try again or contact us directly at info@aitransformationllc.com?",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Send to API for AI processing
    await sendMessageToAPI(userMessage)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
    // Shift+Enter falls through to insert newline
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          if (showNudge) setShowNudge(false)
          try { sessionStorage.setItem('chat_nudge_shown', '1') } catch {}
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {showNudge && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500/40 animate-ping" />
        )}
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Subtle availability nudge bubble */}
      <AnimatePresence>
        {!isOpen && showNudge && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="fixed bottom-24 right-6 z-40 max-w-xs bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-xl px-4 py-3"
          >
            <div className="text-sm text-gray-200">Need help? I&apos;m here to assist.</div>
            <div className="mt-1 text-xs text-gray-400">Ask about services, pricing, or booking.</div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors resize-none max-h-40"
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
