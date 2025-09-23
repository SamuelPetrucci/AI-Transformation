import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail, createContactEmailHTML } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const company = formData.get('company') as string
    const consultationType = formData.get('consultationType') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!name || !email || !consultationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Split name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Store in database using the dedicated AI Transformation contact table
    const { data: dbResult, error: dbError } = await supabase
      .from('ai_transformation_contact')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone || null,
        company: company || null,
        consultation_type: consultationType,
        message: message || null,
        status: 'new',
        source: 'AI Transformation Website'
      })

    if (dbError) {
      console.error('Database error:', dbError)
      // Continue with email notification even if database fails
    }

    // Send email notification via SMTP
    const emailResult = await sendEmail({
      to: process.env.TO_EMAIL || 'info@aitransformationllc.com',
      subject: '[LEAD] New Contact Form Submission - AI Transformation',
      html: createContactEmailHTML({
        name,
        email,
        phone,
        company,
        consultationType,
        message
      })
    })

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      consultationType,
      message,
      timestamp: new Date().toISOString(),
      emailResult,
      dbResult,
      dbError
    })

    // Check if email was sent successfully
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
    }

    // Redirect to success page or back to form
    return NextResponse.redirect(new URL('/?success=true', request.url))
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.redirect(new URL('/?error=true', request.url))
  }
}

