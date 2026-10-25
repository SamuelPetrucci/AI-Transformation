import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript - Centralized Database Schema

// AI Transformation website contact form
export interface AITransformationContact {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  company: string | null
  consultation_type: string
  message: string | null
  status: 'new' | 'contacted' | 'in_progress' | 'closed'
  source: string
  created_at: string
  updated_at: string
}

// RLJ Enterprise contact form
export interface RLJContact {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string | null
  interest: string
  message: string
  status: 'new' | 'contacted' | 'in_progress' | 'closed'
  source: string
  form_type: 'contact' | 'partnership'
  created_at: string
  updated_at: string
}

// Austin Woodruff Insurance submissions
export interface AustinWoodruffSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  zip_code: string
  date_of_birth: string
  annual_income: string
  health_status: string
  medications: string | null
  dependents: string | null
  monthly_budget: string
  coverage_type: string
  additional_info: string | null
  status: 'new' | 'contacted' | 'quoted' | 'closed'
  source: string
  agent_name: string
  created_at: string
  updated_at: string
  referred_by: boolean
  referral_name: string | null
}

// Sports tracking tables
export interface Game {
  id: string
  name: string
  date: string
  opponent: string
  home_away: 'home' | 'away'
  created_at: string
  updated_at: string
}

export interface Player {
  id: string
  name: string
  position: string | null
  jersey_number: number | null
  created_at: string
  updated_at: string
}

export interface Play {
  id: string
  game_id: string | null
  quarter: number
  down: number
  distance: number
  yard_line: number
  play_type: string
  player_name: string
  yards_gained: number
  offense_defense: 'offense' | 'defense'
  notes: string | null
  created_at: string
  updated_at: string
}

// Legacy types for backward compatibility (if needed)
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
