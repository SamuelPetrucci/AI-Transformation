'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Smartphone, ArrowRight } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  isMedia?: boolean
  mediaType?: 'image' | 'video' | 'audio'
}

interface QuickReply {
  text: string
  emoji?: string
}

const AGENT_PHONE = '(860) 705-3417'
const AGENT_PHONE_E164 = '+18607053417'

const quickReplies: QuickReply[] = [
  { text: "What services do you offer?", emoji: "💡" },
  { text: "How does AI automation work?", emoji: "🤖" },
  { text: "I'd like a quote", emoji: "💰" },
  { text: "Book a call", emoji: "📅" },
]

export default function Chatbot() {
  const [enabled, setEnabled] = useState(false)
  const [statusChecked, setStatusChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showNudge, setShowNudge] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! 👋 I'm your AI assistant. Ask me anything about our services, or text me directly for a faster response.",
      sender: 'agent',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/chat/status')
      .then((r) => r.json())
      .then((data: { enabled?: boolean }) => {
        if (!cancelled) setEnabled(Boolean(data.enabled))
      })
      .catch(() => {
        if (!cancelled) setEnabled(false)
      })
      .finally(() => {
        if (!cancelled) setStatusChecked(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!inputRef.current) return
    const el = inputRef.current
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }, [inputValue])

  useEffect(() => {
    if (!enabled) return
    try {
      const shown = typeof window !== 'undefined' && sessionStorage.getItem('chat_nudge_shown')
      if (!shown) {
        const t = setTimeout(() => {
          setShowNudge(true)
          const h = setTimeout(() => setShowNudge(false), 5000)
          return () => clearTimeout(h)
        }, 3000)
        return () => clearTimeout(t)
      }
    } catch {
      // no-op
    }
  }, [enabled])

  const handleQuickReply = (reply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    
    if (reply.text.toLowerCase().includes('book')) {
      const element = document.getElementById('booking')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    
    handleAgentResponse(reply.text)
  }

  const handleAgentResponse = (userText: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      let responseText = "I can help with that! Feel free to ask more questions or text me directly at " + AGENT_PHONE + " for an even faster response."
      
      const lowerText = userText.toLowerCase()
      
      if (lowerText.includes('service') || lowerText.includes('offer')) {
        responseText = "We specialize in:\n\n→ AI Automation & Chatbots\n→ Custom Software Development\n→ Business Process Optimization\n→ Data Analytics Solutions\n\nWant details on any of these? Or text me a quick question anytime 📱"
      } else if (lowerText.includes('automat') || lowerText.includes('ai') || lowerText.includes('how')) {
        responseText = "Great question! We build AI agents that handle tasks like:\n\n→ Customer support 24/7\n→ Lead qualification\n→ Appointment scheduling\n→ Document processing\n\nThink of it as having a tireless team member. Want to see it in action?"
      } else if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost')) {
        responseText = "Pricing depends on your specific needs. Most projects range from $5K-50K.\n\nFor a quick estimate, text me what you're looking to automate and I'll give you a ballpark 📱"
      } else if (lowerText.includes('book') || lowerText.includes('call') || lowerText.includes('meet')) {
        responseText = "Perfect! You can:\n\n→ Book directly on our calendar below\n→ Text me at " + AGENT_PHONE + "\n→ Just reply here with your preferred time\n\nI'll get you scheduled with the right person 🗓️"
      }

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'agent',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 800 + Math.random() * 400)
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
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'agent',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentMessage])
      setConversationId(data.conversationId)

      if (data.isQualified && data.extractedData?.email && !messages.some(m => m.text.includes('schedule') || m.text.includes('book'))) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: "Sounds like we should chat! Book a quick call or text me at " + AGENT_PHONE + " 📱",
            sender: 'agent',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, followUpMessage])
        }, 1500)
      }

    } catch (error) {
      console.error('Error sending message to API:', error)
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Having a bit of trouble here. Text me directly at " + AGENT_PHONE + " and I'll get right back to you! 📱",
        sender: 'agent',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
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

    await sendMessageToAPI(userMessage)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  }

  if (!statusChecked || !enabled) {
    return null
  }

  return (
    <>
      {/* Text My Agent Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          if (showNudge) setShowNudge(false)
          try { sessionStorage.setItem('chat_nudge_shown', '1') } catch {}
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#007AFF] hover:bg-[#0066DD] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {showNudge && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#007AFF]/40 animate-ping" />
        )}
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <MessageSquare size={20} />
            <span className="text-sm font-medium hidden sm:inline">Text My Agent</span>
          </>
        )}
      </motion.button>

      {/* Nudge bubble */}
      <AnimatePresence>
        {!isOpen && showNudge && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-20 right-6 z-40 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[280px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center flex-shrink-0">
                <Smartphone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Got questions?</p>
                <p className="text-xs text-gray-500">Text or chat with our AI agent</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SMS-Style Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-6 z-40 w-[360px] h-[520px] bg-[#F2F2F7] rounded-[24px] shadow-2xl flex flex-col overflow-hidden border border-gray-200/50"
          >
            {/* iMessage-style Header */}
            <div className="bg-[#F2F2F7] px-4 py-3 border-b border-gray-200/60">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#007AFF] text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Close
                </button>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center mb-1">
                    <span className="text-white text-lg">🤖</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-900">AI Agent</p>
                  <p className="text-[10px] text-gray-500">Online now</p>
                </div>
                <a
                  href={`sms:${AGENT_PHONE_E164}`}
                  className="text-[#007AFF] text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
                >
                  <Smartphone size={14} />
                  <span className="hidden sm:inline">SMS</span>
                </a>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
              {messages.map((message, index) => {
                const isUser = message.sender === 'user'
                const showTime = index === 0 || 
                  new Date(messages[index - 1].timestamp).getMinutes() !== new Date(message.timestamp).getMinutes()
                
                return (
                  <div key={message.id}>
                    {showTime && (
                      <p className="text-[10px] text-gray-400 text-center mb-2">
                        {formatTime(message.timestamp)}
                      </p>
                    )}
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2.5 ${
                          isUser
                            ? 'bg-[#007AFF] text-white rounded-[20px] rounded-br-[6px]'
                            : 'bg-white text-gray-900 rounded-[20px] rounded-bl-[6px] shadow-sm'
                        }`}
                      >
                        <p className="text-[15px] leading-[1.4] whitespace-pre-line">{message.text}</p>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-[20px] rounded-bl-[6px] shadow-sm px-4 py-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-3 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {reply.emoji && <span>{reply.emoji}</span>}
                      <span>{reply.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Text directly CTA */}
            <div className="px-3 pb-2">
              <a
                href={`sms:${AGENT_PHONE_E164}?body=Hi! I have a question about your AI services.`}
                className="flex items-center justify-center gap-2 w-full py-2 bg-white/80 rounded-xl text-sm text-gray-600 hover:bg-white transition-colors border border-gray-100"
              >
                <Smartphone size={14} className="text-[#007AFF]" />
                <span>Text me directly at {AGENT_PHONE}</span>
                <ArrowRight size={14} className="text-gray-400" />
              </a>
            </div>

            {/* Input Area - iMessage style */}
            <div className="bg-[#F2F2F7] px-3 py-2 border-t border-gray-200/60">
              <div className="flex items-end gap-2 bg-white rounded-[20px] border border-gray-200 px-3 py-1.5">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="iMessage"
                  rows={1}
                  className="flex-1 bg-transparent text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none resize-none max-h-[100px] py-1"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    inputValue.trim()
                      ? 'bg-[#007AFF] text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <Send size={14} className={inputValue.trim() ? '' : 'opacity-50'} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
