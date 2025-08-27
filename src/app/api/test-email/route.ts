import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    // Test email configuration
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'info@aitransformationllc.com',
      subject: 'Test Email - AI Transformation Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the contact form email notifications are working.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.FROM_EMAIL || 'onboarding@resend.dev'}</p>
        <p><strong>To:</strong> ${process.env.TO_EMAIL || 'info@aitransformationllc.com'}</p>
        <hr>
        <p><em>If you receive this email, the contact form notifications are working correctly!</em></p>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailResult,
      config: {
        fromEmail: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        toEmail: process.env.TO_EMAIL || 'info@aitransformationllc.com',
        hasApiKey: !!process.env.RESEND_API_KEY
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        fromEmail: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        toEmail: process.env.TO_EMAIL || 'info@aitransformationllc.com',
        hasApiKey: !!process.env.RESEND_API_KEY
      }
    })
  }
}
