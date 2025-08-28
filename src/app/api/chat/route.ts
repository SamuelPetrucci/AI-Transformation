import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateChatResponse, analyzeConversation } from '@/lib/openai'
import { Lead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { sessionId, conversationId, messages } = await request.json()

    // Generate AI response
    const aiMessages = messages.map((msg: { sender: string; text: string }) => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }))

    const conversationHistory = messages.map((msg: { sender: string; text: string }) => 
      `${msg.sender}: ${msg.text}`
    ).join('\n')

    const aiResponse = await generateChatResponse(aiMessages, conversationHistory)

    // Analyze conversation for lead information
    const analysis = analyzeConversation(messages)
    
    // Combine extracted data from AI and analysis
    const extractedData = {
      ...analysis.extractedData,
      ...aiResponse.extractedData
    }

    // Check if we have a lead in the database
    let leadId = null
    let lead: Lead | null = null

    if (extractedData.email) {
      // Try to find existing lead by email
      const { data: existingLead } = await supabase
        .from('leads')
        .select('*')
        .eq('email', extractedData.email)
        .single()

      if (existingLead) {
        leadId = existingLead.id
        lead = existingLead
      } else {
        // Create new lead
        const { data: newLead, error: leadError } = await supabase
          .from('leads')
          .insert({
            email: extractedData.email,
            name: extractedData.name,
            phone: extractedData.phone,
            company: extractedData.company,
            industry: extractedData.industry,
            budget_range: extractedData.budget,
            timeline: extractedData.timeline,
            project_type: extractedData.projectType,
            requirements: extractedData.requirements,
            lead_score: Math.max(analysis.leadScore, aiResponse.leadScore || 0),
            is_qualified: analysis.isQualified,
            source: 'chatbot'
          })
          .select()
          .single()

        if (leadError) {
          console.error('Error creating lead:', leadError)
        } else {
          leadId = newLead.id
          lead = newLead
        }
      }
    }

    // Save or update conversation
    let currentConversationId = conversationId

    if (!currentConversationId) {
      // Create new conversation
      const { data: newConversation, error: convError } = await supabase
        .from('conversations')
        .insert({
          lead_id: leadId,
          session_id: sessionId,
          user_agent: request.headers.get('user-agent'),
          ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null,
          messages: messages.concat([{
            id: Date.now().toString(),
            text: aiResponse.message,
            sender: 'bot',
            timestamp: new Date()
          }]),
          message_count: messages.length + 1
        })
        .select()
        .single()

      if (convError) {
        console.error('Error creating conversation:', convError)
      } else {
        currentConversationId = newConversation.id
      }
    } else {
      // Update existing conversation
      const { error: updateError } = await supabase
        .from('conversations')
        .update({
          messages: messages.concat([{
            id: Date.now().toString(),
            text: aiResponse.message,
            sender: 'bot',
            timestamp: new Date()
          }]),
          message_count: messages.length + 1
        })
        .eq('id', currentConversationId)

      if (updateError) {
        console.error('Error updating conversation:', updateError)
      }
    }

    // Track lead events
    if (leadId) {
      const events = []

      if (extractedData.email && !lead?.email) {
        events.push({
          lead_id: leadId,
          event_type: 'email_provided',
          event_data: { email: extractedData.email }
        })
      }

      if (extractedData.budget) {
        events.push({
          lead_id: leadId,
          event_type: 'budget_discussed',
          event_data: { budget: extractedData.budget }
        })
      }

      if (extractedData.timeline) {
        events.push({
          lead_id: leadId,
          event_type: 'timeline_discussed',
          event_data: { timeline: extractedData.timeline }
        })
      }

      if (events.length > 0) {
        const { error: eventsError } = await supabase
          .from('lead_events')
          .insert(events)

        if (eventsError) {
          console.error('Error creating lead events:', eventsError)
        }
      }
    }

    // Update lead score if we have new information
    if (leadId && (analysis.leadScore > 0 || aiResponse.leadScore)) {
      const newScore = Math.max(analysis.leadScore, aiResponse.leadScore || 0)
      
      const { error: scoreError } = await supabase
        .from('leads')
        .update({ 
          lead_score: newScore,
          is_qualified: newScore >= 50
        })
        .eq('id', leadId)

      if (scoreError) {
        console.error('Error updating lead score:', scoreError)
      }
    }

    return NextResponse.json({
      message: aiResponse.message,
      conversationId: currentConversationId,
      extractedData,
      leadScore: Math.max(analysis.leadScore, aiResponse.leadScore || 0),
      isQualified: analysis.isQualified,
      shouldCollectInfo: aiResponse.shouldCollectInfo
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
