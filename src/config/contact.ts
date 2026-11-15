/** Public contact — Quo SMS line for agent consultation. */
export const CONTACT_CONFIG = {
  /** E.164 number visitors text to opt in for a consult */
  SMS_E164: '+17253381895',
  SMS_DISPLAY: '(725) 338-1895',
  /** Legacy / voice line shown elsewhere on the site */
  VOICE_E164: '+18607053417',
  VOICE_DISPLAY: '(860) 705-3417',
  EMAIL: 'info@aitransformationllc.com',
  /** Prefill when the visitor opens Messages — sending this opts them into a consult thread */
  SMS_OPT_IN_BODY:
    "Hi — I'd like to talk about AI Transformation for my business. Please text me to start a consult.",
} as const

/** Opens the native SMS app with number + opt-in draft prefilled. */
export function getSmsConsultHref(
  body: string = CONTACT_CONFIG.SMS_OPT_IN_BODY,
): string {
  const encoded = encodeURIComponent(body)
  return `sms:${CONTACT_CONFIG.SMS_E164}?body=${encoded}`
}
