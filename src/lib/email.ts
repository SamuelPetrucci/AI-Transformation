import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: EmailOptions) {
  try {
    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email
    const info = await transporter.sendMail({
      from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    })

    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export function createContactEmailHTML(data: {
  name: string
  email: string
  phone?: string
  company?: string
  consultationType: string
  message?: string
}) {
  return `
    <h2>New Contact Form Submission - AI Transformation</h2>
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Consultation Type:</strong> ${data.consultationType}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${data.message || 'No message provided'}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 14px;"><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    </div>
  `
}

export function createInsuranceQuoteEmailHTML(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  dateOfBirth: string
  annualIncome: string
  healthStatus: string
  medications?: string
  dependents?: string
  monthlyBudget: string
  coverageType: string
  additionalInfo?: string
  referredBy: boolean
  referralName?: string
}) {
  return `
    <h2>New Insurance Quote Request - AI Transformation</h2>
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Zip Code:</strong> ${data.zipCode}</p>
      <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
      <p><strong>Annual Income:</strong> ${data.annualIncome}</p>
      <p><strong>Health Status:</strong> ${data.healthStatus}</p>
      <p><strong>Medications:</strong> ${data.medications || 'None listed'}</p>
      <p><strong>Dependents:</strong> ${data.dependents || 'None listed'}</p>
      <p><strong>Monthly Budget:</strong> ${data.monthlyBudget}</p>
      <p><strong>Coverage Type:</strong> ${data.coverageType}</p>
      <p><strong>Additional Info:</strong> ${data.additionalInfo || 'None provided'}</p>
      <p><strong>Referred By:</strong> ${data.referredBy ? 'Yes' : 'No'}</p>
      ${data.referralName ? `<p><strong>Referral Name:</strong> ${data.referralName}</p>` : ''}
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 14px;"><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    </div>
  `
}
