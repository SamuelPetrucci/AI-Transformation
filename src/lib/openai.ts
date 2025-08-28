import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Business context for the AI
const businessContext = `
You are an AI assistant for AI Transformation LLC, a company that specializes in AI solutions and business process automation.

Company Information:
- Company: AI Transformation LLC
- Services: AI Strategy & Implementation, Business Process Automation, Data Analytics & Insights, Industry-Grade Protection
- Industries served: Insurance Brokers, Real Estate Agents, Accounting Firms, Medical Offices, Law Firms, Retail Businesses
- Benefits: Custom tailored solutions, Fast implementation, Continued support, Industry-specific expertise

Your role is to:
1. Help visitors understand our services and how we can help their business
2. Qualify leads by gathering key information (budget, timeline, specific needs)
3. Guide visitors toward booking a consultation or filling out our contact form
4. Be professional, helpful, and conversational
5. Extract relevant information from conversations for lead generation

Key information to gather:
- Name and contact information (email, phone)
- Company name and industry
- Budget range (ask naturally what their budget is for the project)
- Timeline (ask when they want to start or complete the project)
- Specific project needs or pain points
- Decision-making authority

When discussing budget:
- Don't suggest specific amounts like "$10k-25k"
- Ask naturally: "What's your budget range for this project?" or "What kind of investment are you thinking about?"
- Be conversational and understanding of different budget levels
- Focus on value and ROI rather than specific price points

Always be helpful and professional. If someone asks about pricing, explain that we offer custom pricing based on their specific needs and recommend scheduling a consultation.
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
}

export async function generateChatResponse(
  messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>,
  conversationHistory: string
): Promise<ChatResponse> {
  try {
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

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const content = response.choices[0]?.message?.content || ''
    
    // Try to extract JSON data from the response
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

    // Remove JSON from the message content
    const cleanMessage = content.replace(/\{[\s\S]*\}/, '').trim()

    return {
      message: cleanMessage,
      extractedData,
      shouldCollectInfo,
      leadScore
    }
  } catch (error) {
    console.error('OpenAI API error:', error)
    return {
      message: "I apologize, but I'm having trouble processing your request right now. Could you please try again or contact us directly at info@aitransformationllc.com?",
      extractedData: {},
      shouldCollectInfo: false,
      leadScore: 0
    }
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
  
  const conversation = messages.map(m => m.text).join(' ').toLowerCase()
  
  // Score based on engagement
  if (messages.length > 5) leadScore += 20
  if (messages.length > 10) leadScore += 10
  
  // Score based on information provided
  if (conversation.includes('@') || conversation.includes('email')) leadScore += 15
  if (conversation.includes('phone') || /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(conversation)) leadScore += 15
  if (conversation.includes('company') || conversation.includes('business')) leadScore += 10
  if (conversation.includes('budget') || /\$[\d,]+/.test(conversation)) leadScore += 20
  if (conversation.includes('timeline') || conversation.includes('when')) leadScore += 15
  if (conversation.includes('consult') || conversation.includes('meeting')) leadScore += 25
  
  // Extract specific information
  const emailMatch = conversation.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  if (emailMatch) extractedData.email = emailMatch[0]
  
  const phoneMatch = conversation.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/)
  if (phoneMatch) extractedData.phone = phoneMatch[0]
  
  if (conversation.includes('insurance')) extractedData.industry = 'Insurance'
  if (conversation.includes('real estate') || conversation.includes('realtor')) extractedData.industry = 'Real Estate'
  if (conversation.includes('accounting') || conversation.includes('bookkeeping')) extractedData.industry = 'Accounting'
  if (conversation.includes('medical') || conversation.includes('healthcare')) extractedData.industry = 'Medical'
  if (conversation.includes('legal') || conversation.includes('law')) extractedData.industry = 'Legal'
  if (conversation.includes('retail') || conversation.includes('store')) extractedData.industry = 'Retail'
  
  const isQualified = leadScore >= 50
  
  return { leadScore, extractedData, isQualified }
}
