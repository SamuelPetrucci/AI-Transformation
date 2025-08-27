export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  consultationType: string
  message?: string
  timestamp: string
}

export async function sendWebhook(data: ContactFormData) {
  const webhookUrl = process.env.WEBHOOK_URL || ''
  
  if (!webhookUrl) {
    console.warn('Webhook URL not configured')
    return false
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'contact_form_submission',
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          company: data.company || '',
          consultationType: data.consultationType,
          message: data.message || '',
          timestamp: data.timestamp,
          source: 'AI Transformation Website'
        }
      }),
    })

    if (response.ok) {
      console.log('Successfully sent webhook')
      return true
    } else {
      console.error('Failed to send webhook:', response.status)
      return false
    }
  } catch (error) {
    console.error('Error sending webhook:', error)
    return false
  }
}
