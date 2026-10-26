import { NextResponse } from 'next/server'
import { isChatEnabled } from '@/lib/openai'

/** Client uses this to show/hide the chat bubble. Enabled only when XAI_API_KEY is set. */
export async function GET() {
  return NextResponse.json({
    enabled: isChatEnabled(),
    provider: isChatEnabled() ? 'xai' : null,
  })
}
