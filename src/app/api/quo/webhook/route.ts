import { NextRequest, NextResponse } from 'next/server'
import { generateSmsResponse } from '@/lib/openai'
import {
  isQuoReplyConfigured,
  isSmsOptOut,
  sendQuoMessage,
  verifyQuoWebhookSignature,
  type QuoMessageReceivedEvent,
} from '@/lib/quo'

/** Best-effort dedupe across warm serverless instances (not durable). */
const recentDeliveries = new Map<string, number>()
const DEDUPE_TTL_MS = 1000 * 60 * 60 * 6

function rememberDelivery(id: string) {
  const now = Date.now()
  recentDeliveries.set(id, now)
  for (const [key, ts] of recentDeliveries) {
    if (now - ts > DEDUPE_TTL_MS) recentDeliveries.delete(key)
  }
}

function alreadyHandled(id: string) {
  const ts = recentDeliveries.get(id)
  if (!ts) return false
  if (Date.now() - ts > DEDUPE_TTL_MS) {
    recentDeliveries.delete(id)
    return false
  }
  return true
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  const deliveryId = request.headers.get('webhook-id')
  const timestamp = request.headers.get('webhook-timestamp')
  const signature = request.headers.get('webhook-signature')

  if (!verifyQuoWebhookSignature(rawBody, { id: deliveryId, timestamp, signature })) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
  }

  if (deliveryId && alreadyHandled(deliveryId)) {
    return NextResponse.json({ ok: true, deduped: true })
  }
  if (deliveryId) rememberDelivery(deliveryId)

  let event: { type?: string; data?: QuoMessageReceivedEvent['data'] }
  try {
    event = JSON.parse(rawBody) as { type?: string; data?: QuoMessageReceivedEvent['data'] }
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (event.type !== 'message.received') {
    return NextResponse.json({ ok: true, ignored: event.type || 'unknown' })
  }

  const resource = event.data?.resource
  const context = event.data?.context
  const inboundText = resource?.text?.trim() || ''
  const fromNumber = context?.senderIdentifier

  if (!resource || resource.direction !== 'incoming' || !fromNumber) {
    return NextResponse.json({ ok: true, ignored: 'not-inbound' })
  }

  if (!inboundText || isSmsOptOut(inboundText)) {
    return NextResponse.json({ ok: true, ignored: 'opt-out-or-empty' })
  }

  if (!isQuoReplyConfigured()) {
    console.warn(
      'Quo webhook received inbound SMS but QUO_API_KEY / QUO_PHONE_NUMBER_ID / QUO_WEBHOOK_KEY are not fully configured',
    )
    return NextResponse.json({ ok: true, skipped: 'not-configured' })
  }

  try {
    const ai = await generateSmsResponse(inboundText)
    const send = await sendQuoMessage({
      to: fromNumber,
      content: ai.message,
      fromPhoneNumberId: context.phoneNumberId,
    })

    if (!send.ok) {
      console.error('Quo send failed:', send.status, send.detail)
      // Non-2xx so Quo retries delivery
      return NextResponse.json({ error: 'Failed to send reply', detail: send.detail }, { status: 502 })
    }

    return NextResponse.json({ ok: true, replied: true, messageId: send.id })
  } catch (error) {
    console.error('Quo webhook handler error:', error)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }
}

/** Health check for ops — does not expose secrets. */
export async function GET() {
  return NextResponse.json({
    service: 'quo-webhook',
    configured: isQuoReplyConfigured(),
  })
}
