import OpenAI from 'openai'

/** Trim + strip wrapping quotes — common when pasting into Vercel/GitHub secrets. */
export function normalizeSecret(value: string | undefined | null): string {
  if (!value) return ''
  return value.trim().replace(/^['"]|['"]$/g, '')
}

export function getXaiApiKey() {
  return normalizeSecret(process.env.XAI_API_KEY)
}

/** Chat uses xAI Grok only — OpenAI is not used for the site chatbot. */
export function isChatEnabled() {
  return Boolean(getXaiApiKey())
}

function getXaiClient() {
  const apiKey = getXaiApiKey()
  if (!apiKey) {
    throw new Error('XAI_API_KEY is not configured')
  }
  return new OpenAI({
    apiKey,
    baseURL: 'https://api.x.ai/v1',
  })
}

function preferredModels() {
  const preferred = normalizeSecret(process.env.XAI_MODEL) || 'grok-3-latest'
  const fallbacks = ['grok-3-latest', 'grok-3', 'grok-2-latest', 'grok-2-1212', 'grok-4.7']
  return [preferred, ...fallbacks.filter((m) => m !== preferred)]
}

export type XaiDiag =
  | { ok: true; model?: string }
  | { ok: false; code: 'missing_key' | 'unauthorized' | 'model' | 'billing' | 'network' | 'unknown'; detail: string }

/** Non-destructive check used by /api/chat/status — never returns the key. */
export async function diagnoseXai(): Promise<XaiDiag> {
  const apiKey = getXaiApiKey()
  if (!apiKey) {
    return { ok: false, code: 'missing_key', detail: 'XAI_API_KEY is not set in this environment.' }
  }

  try {
    const res = await fetch('https://api.x.ai/v1/models', {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    if (res.status === 401 || res.status === 403) {
      return {
        ok: false,
        code: 'unauthorized',
        detail: 'xAI rejected the key (401/403). Re-create the key at console.x.ai and paste it into Vercel without quotes/spaces.',
      }
    }
    if (res.status === 402 || res.status === 429) {
      return {
        ok: false,
        code: 'billing',
        detail: `xAI returned ${res.status} — check credits/billing on console.x.ai.`,
      }
    }
    if (!res.ok) {
      const text = await res.text()
      return { ok: false, code: 'unknown', detail: `xAI models check failed (${res.status}): ${text.slice(0, 180)}` }
    }
    return { ok: true, model: preferredModels()[0] }
  } catch (e) {
    return {
      ok: false,
      code: 'network',
      detail: e instanceof Error ? e.message : 'Could not reach api.x.ai',
    }
  }
}

// Business context for the AI
const businessContext = `
You are an AI assistant for AI Transformation LLC.

Positioning (use this consistently):
AI Transformation LLC is a go-to-market technology partner. We bring app ideas, products, and in-house applications to life and to market fast—with user authentication, role-based access, security measures, biometrics and passkeys, and secure storage for sensitive data—then manage and help maintain them for maximum uptime. We still help businesses save time, reduce costs, and grow.

We sell PRODUCTS (not vague “services”). Match the caller to a product:

Content Engine (grow + save time):
- Starter — 1 platform; trained agent; human approval
- Growth — multi-platform; calendar; human gate
- + Product Ads — Growth plus one product ad campaign (ad spend separate)
Any major media platforms—not just Facebook/Instagram. Human approves every draft.

AI Agents (save time):
We fine-tune and train agents to carry out repetitive, error-prone tasks—then queue the work for your review.
- Efficiency Audit
- Scheduled Agents (Cron)
- Triggered Agents (leads, tickets, bookings, app events; receptionist/follow-up when they fit)
- Agent Care Plan

Custom Software (own the stack):
- Business Website System
- Booking & Scheduling System
- CRM & Custom Operation Software

Own Your Tech Stack (own the stack + save money):
- Stack Rebuild — replace rented SaaS with software you own
- Application Integrations
- Analytics Dashboard

Training & Support:
- Staff Tech Training
- AI Knowledge Base
- Maintenance Retainer
- Support Retainer

Contact: (860) 705-3417 · info@aitransformationllc.com
Industries: Insurance, real estate, accounting, medical, law, retail/service SMBs

Your role:
1. Lead with go-to-market partner positioning when relevant; talk in products and outcomes (grow / save time / save money / own stack)—never sound like “only social” or a vague agency
2. Mention auth/security and post-launch manage/maintain + maximum uptime when discussing custom builds
3. Qualify leads (budget, timeline, which product fits)
4. Guide toward booking a consultation on Calendly (or text/call)
5. Stay professional, helpful, conversational

When discussing budget / pricing:
- Pricing is simple and transparent—it depends on system operating cost, development complexity, and maintenance overhead
- All invoices are itemized and broken down to the penny
- Do not invent dollar amounts; guide them to a consult for a transparent quote
- Focus on time saved, cost reduced, and growth—not hype

Always recommend a free consultation to pick the right product.
`

export interface ChatResponse {
  message: string
  extractedData?: {
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
  shouldCollectInfo?: boolean
  leadScore?: number
  errorCode?: string
}

export async function generateChatResponse(
  messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>,
  conversationHistory: string,
): Promise<ChatResponse> {
  if (!isChatEnabled()) {
    return {
      message:
        'Our chat assistant is temporarily unavailable. Please call (860) 705-3417 or email info@aitransformationllc.com.',
      extractedData: {},
      shouldCollectInfo: false,
      leadScore: 0,
      errorCode: 'missing_key',
    }
  }

  const systemPrompt = `${businessContext}

Current conversation context:
${conversationHistory}

Instructions:
1. Respond naturally and helpfully
2. Extract any relevant information the user provides
3. If the user provides contact info, company details, budget, or timeline, note it
4. Guide them toward booking a consultation if they seem interested
5. Keep responses concise but informative

After your response, provide a JSON object with any extracted data in this format:
{
  "extractedData": {
    "name": "extracted name if mentioned",
    "email": "extracted email if mentioned", 
    "phone": "extracted phone if mentioned",
    "company": "extracted company if mentioned",
    "industry": "extracted industry if mentioned",
    "budget": "extracted budget range if mentioned",
    "timeline": "extracted timeline if mentioned",
    "projectType": "extracted project type if mentioned",
    "requirements": "extracted requirements if mentioned"
  },
  "shouldCollectInfo": true/false,
  "leadScore": 0-100
}`

  const xai = getXaiClient()
  const models = preferredModels()
  let lastError: unknown

  for (const model of models) {
    try {
      const response = await xai.chat.completions.create({
        model,
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        temperature: 0.7,
        max_tokens: 500,
      })

      const content = response.choices[0]?.message?.content || ''

      const jsonMatch = content.match(/\{[\s\S]*\}/)
      let extractedData: Record<string, unknown> = {}
      let shouldCollectInfo = false
      let leadScore = 0

      if (jsonMatch) {
        try {
          const jsonData = JSON.parse(jsonMatch[0]) as {
            extractedData?: Record<string, unknown>
            shouldCollectInfo?: boolean
            leadScore?: number
          }
          extractedData = jsonData.extractedData || {}
          shouldCollectInfo = jsonData.shouldCollectInfo || false
          leadScore = jsonData.leadScore || 0
        } catch (e) {
          console.error('Failed to parse JSON from AI response:', e)
        }
      }

      const cleanMessage = content.replace(/\{[\s\S]*\}/, '').trim()

      return {
        message: cleanMessage,
        extractedData,
        shouldCollectInfo,
        leadScore,
      }
    } catch (error) {
      lastError = error
      const status = (error as { status?: number })?.status
      const msg = error instanceof Error ? error.message : String(error)
      console.error(`xAI chat error with model ${model}:`, status, msg)

      // Auth / billing won't be fixed by switching models
      if (status === 401 || status === 403) break
      if (status === 402 || status === 429) break
      // Try next model on 404 / model-not-found style failures
      continue
    }
  }

  const status = (lastError as { status?: number })?.status
  const code =
    status === 401 || status === 403
      ? 'unauthorized'
      : status === 402 || status === 429
        ? 'billing'
        : status === 404
          ? 'model'
          : 'unknown'

  console.error('xAI chat exhausted model fallbacks:', lastError)

  return {
    message:
      code === 'unauthorized'
        ? 'Chat is misconfigured (xAI API key rejected). Please call (860) 705-3417 or email info@aitransformationllc.com.'
        : code === 'billing'
          ? 'Chat is temporarily unavailable (xAI quota/billing). Please call (860) 705-3417 or email info@aitransformationllc.com.'
          : "I apologize, but I'm having trouble processing your request right now. Could you please try again or contact us directly at info@aitransformationllc.com or (860) 705-3417?",
    extractedData: {},
    shouldCollectInfo: false,
    leadScore: 0,
    errorCode: code,
  }
}

// Function to analyze conversation and extract lead information
export function analyzeConversation(messages: Array<{ text: string; sender: string }>): {
  leadScore: number
  extractedData: Record<string, unknown>
  isQualified: boolean
} {
  let leadScore = 0
  const extractedData: Record<string, unknown> = {}

  const conversation = messages.map((m) => m.text).join(' ').toLowerCase()

  if (messages.length > 5) leadScore += 20
  if (messages.length > 10) leadScore += 10

  if (conversation.includes('@') || conversation.includes('email')) leadScore += 15
  if (conversation.includes('phone') || /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(conversation))
    leadScore += 15
  if (conversation.includes('company') || conversation.includes('business')) leadScore += 10
  if (conversation.includes('budget') || /\$[\d,]+/.test(conversation)) leadScore += 20
  if (conversation.includes('timeline') || conversation.includes('when')) leadScore += 15
  if (conversation.includes('consult') || conversation.includes('meeting')) leadScore += 25

  const emailMatch = conversation.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  if (emailMatch) extractedData.email = emailMatch[0]

  const phoneMatch = conversation.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/)
  if (phoneMatch) extractedData.phone = phoneMatch[0]

  if (conversation.includes('insurance')) extractedData.industry = 'Insurance'
  if (conversation.includes('real estate') || conversation.includes('realtor'))
    extractedData.industry = 'Real Estate'
  if (conversation.includes('accounting') || conversation.includes('bookkeeping'))
    extractedData.industry = 'Accounting'
  if (conversation.includes('medical') || conversation.includes('healthcare'))
    extractedData.industry = 'Medical'
  if (conversation.includes('legal') || conversation.includes('law')) extractedData.industry = 'Legal'
  if (conversation.includes('retail') || conversation.includes('store'))
    extractedData.industry = 'Retail'

  const isQualified = leadScore >= 50

  return { leadScore, extractedData, isQualified }
}
