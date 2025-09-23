import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateChatResponse, analyzeConversation } from '@/lib/openai'
import { AITransformationContact } from '@/lib/supabase'

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

    // Check if we have a contact in the database
    let contactId = null
    let contact: AITransformationContact | null = null

    if (extractedData.email) {
      // Try to find existing contact by email
      const { data: existingContact } = await supabase
        .from('ai_transformation_contact')
        .select('*')
        .eq('email', extractedData.email)
        .single()

      if (existingContact) {
        contactId = existingContact.id
        contact = existingContact
      } else {
        // Create new contact
        const { data: newContact, error: contactError } = await supabase
          .from('ai_transformation_contact')
          .insert({
            first_name: extractedData.name?.split(' ')[0] || '',
            last_name: extractedData.name?.split(' ').slice(1).join(' ') || '',
            email: extractedData.email,
            phone: extractedData.phone || null,
            company: extractedData.company || null,
            consultation_type: extractedData.projectType || 'General Inquiry',
            message: `Chatbot conversation data:
            Industry: ${extractedData.industry || 'Not specified'}
            Budget: ${extractedData.budget || 'Not specified'}
            Timeline: ${extractedData.timeline || 'Not specified'}
            Requirements: ${extractedData.requirements || 'Not specified'}
            Lead Score: ${Math.max(analysis.leadScore, aiResponse.leadScore || 0)}
            Qualified: ${analysis.isQualified ? 'Yes' : 'No'}`,
            status: 'new',
            source: 'AI Transformation Website - Chatbot'
          })
          .select()
          .single()

        if (contactError) {
          console.error('Error creating contact:', contactError)
        } else {
          contactId = newContact.id
          contact = newContact
        }
      }
    }

    // Update contact with new information if we have additional details
    if (contactId && (extractedData.phone || extractedData.company || extractedData.projectType)) {
      const updateData: Record<string, string> = {}
      
      if (extractedData.phone && !contact?.phone) {
        updateData.phone = extractedData.phone
      }
      
      if (extractedData.company && !contact?.company) {
        updateData.company = extractedData.company
      }
      
      if (extractedData.projectType && contact?.consultation_type === 'General Inquiry') {
        updateData.consultation_type = extractedData.projectType
      }

      // Update the message with additional conversation data
      const updatedMessage = `${contact?.message || ''}\n\nAdditional conversation data:
      Phone: ${extractedData.phone || 'Not provided'}
      Company: ${extractedData.company || 'Not provided'}
      Project Type: ${extractedData.projectType || 'Not specified'}
      Industry: ${extractedData.industry || 'Not specified'}
      Budget: ${extractedData.budget || 'Not specified'}
      Timeline: ${extractedData.timeline || 'Not specified'}
      Requirements: ${extractedData.requirements || 'Not specified'}
      Lead Score: ${Math.max(analysis.leadScore, aiResponse.leadScore || 0)}
      Qualified: ${analysis.isQualified ? 'Yes' : 'No'}
      Session ID: ${sessionId}
      Timestamp: ${new Date().toISOString()}`

      updateData.message = updatedMessage

      if (Object.keys(updateData).length > 0) {
        const { error: updateError } = await supabase
          .from('ai_transformation_contact')
          .update(updateData)
          .eq('id', contactId)

        if (updateError) {
          console.error('Error updating contact:', updateError)
        }
      }
    }


    return NextResponse.json({
      message: aiResponse.message,
      conversationId: conversationId,
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
