import { NextResponse } from 'next/server'
import { diagnoseXai, getXaiApiKey, isChatEnabled } from '@/lib/openai'

/**
 * Client uses this to show/hide the chat bubble.
 * Also runs a lightweight xAI auth check so mis-pasted keys surface clearly.
 * Never returns the secret value.
 */
export async function GET() {
  const hasKey = Boolean(getXaiApiKey())
  if (!hasKey) {
    return NextResponse.json({
      enabled: false,
      provider: null,
      ok: false,
      code: 'missing_key',
      detail:
        'Add XAI_API_KEY in Vercel → Project → Settings → Environment Variables (Production + Preview), then redeploy.',
    })
  }

  const diag = await diagnoseXai()
  return NextResponse.json({
    enabled: isChatEnabled() && diag.ok,
    provider: diag.ok ? 'xai' : null,
    ...diag,
  })
}
