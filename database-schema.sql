-- Database Schema for AI Transformation LLC Chatbot
-- Run this in your Supabase SQL editor

-- Note: Supabase handles JWT secrets automatically, so we don't need to set them manually

-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Basic Information
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(50),
  company VARCHAR(255),
  industry VARCHAR(100),
  
  -- Lead Qualification
  budget_range VARCHAR(100), -- e.g., "$10k-25k", "$25k-50k", "$50k+", "around $30k", "flexible"
  timeline VARCHAR(100), -- e.g., "1-3 months", "3-6 months", "6+ months", "asap", "flexible"
  project_type VARCHAR(100), -- e.g., "AI Strategy", "Process Automation", "Data Analytics"
  
  -- Lead Scoring
  lead_score INTEGER DEFAULT 0, -- 0-100
  is_qualified BOOLEAN DEFAULT FALSE,
  is_contacted BOOLEAN DEFAULT FALSE,
  
  -- Source Information
  source VARCHAR(50) DEFAULT 'chatbot',
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  
  -- Additional Data
  requirements TEXT,
  notes TEXT
);

-- Create conversations table
CREATE TABLE conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Lead Reference
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Session Information
  session_id VARCHAR(255),
  user_agent TEXT,
  ip_address INET,
  
  -- Conversation Data
  messages JSONB, -- Store full conversation as JSON
  message_count INTEGER DEFAULT 0,
  
  -- Analytics
  duration_seconds INTEGER,
  ended_at TIMESTAMP WITH TIME ZONE
);

-- Create lead_events table for tracking interactions
CREATE TABLE lead_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Lead Reference
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Event Information
  event_type VARCHAR(50), -- e.g., "conversation_started", "email_provided", "budget_discussed"
  event_data JSONB,
  
  -- Source
  source VARCHAR(50) DEFAULT 'chatbot'
);

-- Create indexes for better performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_lead_score ON leads(lead_score);
CREATE INDEX idx_conversations_lead_id ON conversations(lead_id);
CREATE INDEX idx_conversations_session_id ON conversations(session_id);
CREATE INDEX idx_lead_events_lead_id ON lead_events(lead_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for leads table
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_events ENABLE ROW LEVEL SECURITY;

-- Create policies for API access
-- Allow all operations for the chatbot (you can restrict this later for production)
CREATE POLICY "Allow all operations for leads" ON leads
    FOR ALL USING (true);

CREATE POLICY "Allow all operations for conversations" ON conversations
    FOR ALL USING (true);

CREATE POLICY "Allow all operations for lead_events" ON lead_events
    FOR ALL USING (true);

-- Insert some sample data for testing
INSERT INTO leads (name, email, company, industry, budget_range, timeline, lead_score, is_qualified)
VALUES 
  ('John Smith', 'john@abcinsurance.com', 'ABC Insurance', 'Insurance', 'around $35k', 'within 3 months', 85, true),
  ('Sarah Johnson', 'sarah@realtor.com', 'Johnson Real Estate', 'Real Estate', 'flexible, around $20k', 'no rush, 3-6 months', 70, true),
  ('Mike Chen', 'mike@medicalclinic.com', 'Downtown Medical', 'Medical', 'budget not a concern, need it done right', 'asap', 95, true);
