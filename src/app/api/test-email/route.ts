import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function GET() {
  try {
    // Test email configuration using SMTP
    const emailResult = await sendEmail({
      to: process.env.TO_EMAIL || 'info@aitransformationllc.com',
      subject: 'Test Email - AI Transformation Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the contact form email notifications are working.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_FROM || 'noreply@aitransformationllc.com'}</p>
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
        fromEmail: process.env.SMTP_FROM || 'noreply@aitransformationllc.com',
        toEmail: process.env.TO_EMAIL || 'info@aitransformationllc.com',
        hasSmtpConfig: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        fromEmail: process.env.SMTP_FROM || 'noreply@aitransformationllc.com',
        toEmail: process.env.TO_EMAIL || 'info@aitransformationllc.com',
        hasSmtpConfig: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
      }
    })
  }
}
