import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Send email notification via Resend
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'info@aitransformationllc.com',
      subject: '[LEAD] New Contact Form Submission - AI Transformation',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `
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
      emailResult
    })

    // Redirect to success page or back to form
    return NextResponse.redirect(new URL('/?success=true', request.url))
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.redirect(new URL('/?error=true', request.url))
  }
}

