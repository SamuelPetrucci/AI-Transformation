import crypto from 'node:crypto'
import { normalizeSecret } from '@/lib/openai'
import { CONTACT_CONFIG } from '@/config/contact'

const QUO_API_BASE = 'https://api.quo.com'
const QUO_API_VERSION = '2026-03-30'
const MAX_WEBHOOK_AGE_SECONDS = 5 * 60

export function getQuoApiKey() {
  return normalizeSecret(process.env.QUO_API_KEY)
}

export function getQuoWebhookKey() {
  return normalizeSecret(process.env.QUO_WEBHOOK_KEY)
}

/** Quo phone number id (PN…) used as the `from` field when sending. */
export function getQuoPhoneNumberId() {
  return normalizeSecret(process.env.QUO_PHONE_NUMBER_ID)
}

export function getQuoFromE164() {
  return normalizeSecret(process.env.QUO_PHONE_E164) || CONTACT_CONFIG.SMS_E164
}

export function isQuoReplyConfigured() {
  return Boolean(getQuoApiKey() && getQuoPhoneNumberId() && getQuoWebhookKey())
}

export type QuoMessageReceivedEvent = {
  id?: string
  type: 'message.received'
  data: {
    resource: {
      id: string
      direction: 'incoming' | 'outgoing'
      text: string
      status?: string
      createdAt?: string
    }
    context: {
      orgId?: string
      phoneNumberId?: string
      conversationId?: string
      senderIdentifier: string
      recipientIdentifiers?: string[]
    }
  }
}

/** Verify Quo/Svix-style webhook signature against the raw body. */
export function verifyQuoWebhookSignature(
  rawBody: string,
  headers: {
    id: string | null
    timestamp: string | null
    signature: string | null
  },
  secret = getQuoWebhookKey(),
): boolean {
  if (!secret || !headers.id || !headers.timestamp || !headers.signature) {
    return false
  }

  const timestamp = Number(headers.timestamp)
  const now = Math.floor(Date.now() / 1000)
  if (!Number.isFinite(timestamp) || Math.abs(now - timestamp) > MAX_WEBHOOK_AGE_SECONDS) {
    return false
  }

  const secretBase64 = secret.startsWith('whsec_') ? secret.slice('whsec_'.length) : secret
  let secretBytes: Buffer
  try {
    secretBytes = Buffer.from(secretBase64, 'base64')
  } catch {
    return false
  }

  const signedContent = `${headers.id}.${headers.timestamp}.${rawBody}`
  const expectedSignature = crypto
    .createHmac('sha256', secretBytes)
    .update(signedContent)
    .digest('base64')

  const providedSignatures = headers.signature
    .split(' ')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [version, signature] = entry.split(',')
      return version === 'v1' ? signature : undefined
    })
    .filter((signature): signature is string => Boolean(signature))

  return providedSignatures.some((signature) => {
    const left = Buffer.from(signature)
    const right = Buffer.from(expectedSignature)
    return left.length === right.length && crypto.timingSafeEqual(left, right)
  })
}

export async function sendQuoMessage(params: {
  to: string
  content: string
  fromPhoneNumberId?: string
}): Promise<{ ok: true; id?: string } | { ok: false; status: number; detail: string }> {
  const apiKey = getQuoApiKey()
  const from = params.fromPhoneNumberId || getQuoPhoneNumberId()

  if (!apiKey) {
    return { ok: false, status: 0, detail: 'QUO_API_KEY is not set' }
  }
  if (!from) {
    return { ok: false, status: 0, detail: 'QUO_PHONE_NUMBER_ID is not set' }
  }

  const content = params.content.trim().slice(0, 1600)
  if (!content) {
    return { ok: false, status: 0, detail: 'Empty message content' }
  }

  const res = await fetch(`${QUO_API_BASE}/messages`, {
    method: 'POST',
    headers: {
      Authorization: apiKey,
      'Content-Type': 'application/json',
      'Quo-Api-Version': QUO_API_VERSION,
    },
    body: JSON.stringify({
      content,
      from,
      to: [params.to],
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    return {
      ok: false,
      status: res.status,
      detail: text.slice(0, 300) || `Quo send failed (${res.status})`,
    }
  }

  const data = (await res.json().catch(() => ({}))) as { data?: { id?: string }; id?: string }
  return { ok: true, id: data.data?.id || data.id }
}

/** Carrier / compliance keywords — do not auto-reply. */
export function isSmsOptOut(text: string) {
  const t = text.trim().toUpperCase()
  return ['STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT'].includes(t)
}
