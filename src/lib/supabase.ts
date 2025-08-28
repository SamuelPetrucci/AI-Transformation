import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Lead {
  id: string
  created_at: string
  updated_at: string
  name: string | null
  email: string | null
  phone: string | null
  company: string | null
  industry: string | null
  budget_range: string | null
  timeline: string | null
  project_type: string | null
  lead_score: number
  is_qualified: boolean
  is_contacted: boolean
  source: string
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  requirements: string | null
  notes: string | null
}

export interface Conversation {
  id: string
  created_at: string
  lead_id: string | null
  session_id: string | null
  user_agent: string | null
  ip_address: string | null
  messages: Record<string, unknown>
  message_count: number
  duration_seconds: number | null
  ended_at: string | null
}

export interface LeadEvent {
  id: string
  created_at: string
  lead_id: string | null
  event_type: string
  event_data: Record<string, unknown>
  source: string
}

export interface ChatMessage {
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
