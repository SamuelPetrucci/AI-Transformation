import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail, createInsuranceQuoteEmailHTML } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract all required fields for insurance quote
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const zipCode = formData.get('zipCode') as string
    const dateOfBirth = formData.get('dateOfBirth') as string
    const annualIncome = formData.get('annualIncome') as string
    const healthStatus = formData.get('healthStatus') as string
    const medications = formData.get('medications') as string
    const dependents = formData.get('dependents') as string
    const monthlyBudget = formData.get('monthlyBudget') as string
    const coverageType = formData.get('coverageType') as string
    const additionalInfo = formData.get('additionalInfo') as string
    const referredBy = formData.get('referredBy') === 'true'
    const referralName = formData.get('referralName') as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !zipCode || !dateOfBirth || 
        !annualIncome || !healthStatus || !monthlyBudget || !coverageType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Store in database using the ai_transformation_contact table
    // Note: This API is for insurance quotes but we'll store it as a contact form submission
    // since the table structure is designed for general contact forms
    const { data: dbResult, error: dbError } = await supabase
      .from('ai_transformation_contact')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        company: null, // No company field for insurance quotes
        consultation_type: `Insurance Quote - ${coverageType}`,
        message: `Insurance Quote Request:
        Zip Code: ${zipCode}
        Date of Birth: ${dateOfBirth}
        Annual Income: ${annualIncome}
        Health Status: ${healthStatus}
        Medications: ${medications || 'None'}
        Dependents: ${dependents || 'None'}
        Monthly Budget: ${monthlyBudget}
        Coverage Type: ${coverageType}
        Additional Info: ${additionalInfo || 'None'}
        Referred By: ${referredBy ? 'Yes' : 'No'}
        ${referralName ? `Referral Name: ${referralName}` : ''}`,
        status: 'new',
        source: 'AI Transformation Website - Insurance Quote'
      })

    if (dbError) {
      console.error('Database error:', dbError)
      // Continue with email notification even if database fails
    }

    // Send email notification via SMTP
    const emailResult = await sendEmail({
      to: process.env.TO_EMAIL || 'info@aitransformationllc.com',
      subject: '[INSURANCE QUOTE] New Quote Request - AI Transformation',
      html: createInsuranceQuoteEmailHTML({
        firstName,
        lastName,
        email,
        phone,
        zipCode,
        dateOfBirth,
        annualIncome,
        healthStatus,
        medications,
        dependents,
        monthlyBudget,
        coverageType,
        additionalInfo,
        referredBy,
        referralName
      })
    })

    // Log the submission
    console.log('Insurance quote submission:', {
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      dateOfBirth,
      annualIncome,
      healthStatus,
      medications,
      dependents,
      monthlyBudget,
      coverageType,
      additionalInfo,
      referredBy,
      referralName,
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
    console.error('Insurance quote form error:', error)
    return NextResponse.redirect(new URL('/?error=true', request.url))
  }
}
