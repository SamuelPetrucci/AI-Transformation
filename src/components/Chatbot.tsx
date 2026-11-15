'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Smartphone } from 'lucide-react'
import { CONTACT_CONFIG } from '@/config/contact'

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

const AGENT_PHONE = CONTACT_CONFIG.PHONE_DISPLAY
const AGENT_PHONE_E164 = CONTACT_CONFIG.PHONE_E164
const AGENT_NAME = 'Samuel'

const quickReplies: QuickReply[] = [
  { text: "What can you help with?", emoji: "💬" },
  { text: "Tell me about AI agents", emoji: "🤖" },
  { text: "Get a quote", emoji: "💰" },
  { text: "Schedule a call", emoji: "📅" },
]

export default function Chatbot() {
  const [enabled, setEnabled] = useState(false)
  const [statusChecked, setStatusChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showNudge, setShowNudge] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! 👋 I'm Sam's AI agent. Text me anytime - I can answer questions, send you info, or get you on the calendar.",
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
      let responseText = "I got you! Text me anytime at " + AGENT_PHONE + " - I'm always here."
      
      const lowerText = userText.toLowerCase()
      
      if (lowerText.includes('help') || lowerText.includes('can you') || lowerText.includes('what')) {
        responseText = "I can help you with:\n\n→ Answer questions about our AI services\n→ Send you case studies or info\n→ Get you on Sam's calendar\n→ Give you a quick quote\n\nJust text me what you need 📱"
      } else if (lowerText.includes('automat') || lowerText.includes('ai') || lowerText.includes('tell')) {
        responseText = "AI Agents means we fine-tune and train agents to carry out repetitive, error-prone tasks—then queue the work for your review:\n\n→ Scheduled jobs (reports, reminders, cleanups)\n→ Triggers on leads, tickets, bookings\n→ Human review before anything that matters goes out\n\nWant me to walk you through an Efficiency Audit? Just text me 📱"
      } else if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost')) {
        responseText = "Projects usually run $5K-50K depending on scope.\n\nText me what you're looking to build and I'll get you a ballpark within a few hours 📱"
      } else if (lowerText.includes('book') || lowerText.includes('call') || lowerText.includes('schedule') || lowerText.includes('meet')) {
        responseText = "I'll get you scheduled! You can:\n\n→ Text me your availability\n→ Book directly on the calendar below\n\nWhat works better for you?"
      }

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'agent',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 600 + Math.random() * 300)
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
            text: "Sounds like we should connect! Text me and I'll get you on the calendar 📱",
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
        text: "Hmm, having a moment here. Text me at " + AGENT_PHONE + " - I'll respond faster there! 📱",
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
            <span className="text-sm font-medium hidden sm:inline">Text {AGENT_NAME}</span>
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
            className="fixed bottom-20 right-6 z-40 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[260px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Text {AGENT_NAME}</p>
                <p className="text-xs text-gray-500">Get answers instantly</p>
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
            {/* Header */}
            <div className="bg-[#F2F2F7] px-4 py-3 border-b border-gray-200/60">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#007AFF] text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Close
                </button>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center mb-1 shadow-lg">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{AGENT_NAME}</p>
                  <p className="text-[10px] text-green-600 font-medium">● Online</p>
                </div>
                <a
                  href={`sms:${AGENT_PHONE_E164}`}
                  className="text-[#007AFF] text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
                >
                  <Smartphone size={14} />
                  <span>Text</span>
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
                href={`sms:${AGENT_PHONE_E164}?body=Hey! I have a quick question.`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-[#007AFF] to-[#5856D6] rounded-xl text-sm text-white font-medium hover:opacity-90 transition-opacity shadow-sm"
              >
                <Smartphone size={16} />
                <span>Text {AGENT_NAME} → {AGENT_PHONE}</span>
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
                  placeholder="Text message"
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
