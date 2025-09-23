-- AI Transformation Website Database Schema
-- This schema creates the dedicated table for AI Transformation website form submissions

-- Create ai_transformation_contact table (dedicated table for AI Transformation website)
CREATE TABLE public.ai_transformation_contact (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  email character varying NOT NULL,
  phone character varying,
  company character varying,
  consultation_type character varying NOT NULL,
  message text,
  status character varying DEFAULT 'new'::character varying CHECK (status::text = ANY (ARRAY['new'::character varying, 'contacted'::character varying, 'in_progress'::character varying, 'closed'::character varying]::text[])),
  source character varying DEFAULT 'AI Transformation Website'::character varying,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT ai_transformation_contact_pkey PRIMARY KEY (id)
);

-- Create indexes for better performance
CREATE INDEX idx_ai_transformation_contact_email ON ai_transformation_contact(email);
CREATE INDEX idx_ai_transformation_contact_created_at ON ai_transformation_contact(created_at);
CREATE INDEX idx_ai_transformation_contact_status ON ai_transformation_contact(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at column
CREATE TRIGGER update_ai_transformation_contact_updated_at BEFORE UPDATE ON ai_transformation_contact
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE ai_transformation_contact ENABLE ROW LEVEL SECURITY;

-- Create policy for API access
CREATE POLICY "Allow all operations for ai_transformation_contact" ON ai_transformation_contact
    FOR ALL USING (true);
