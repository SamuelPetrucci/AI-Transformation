/** Public contact — Samuel's direct line for text or call. */
export const CONTACT_CONFIG = {
  /** E.164 — one number for SMS and voice */
  PHONE_E164: '+18607053417',
  PHONE_DISPLAY: '(860) 705-3417',
  /** Aliases for existing imports */
  SMS_E164: '+18607053417',
  SMS_DISPLAY: '(860) 705-3417',
  VOICE_E164: '+18607053417',
  VOICE_DISPLAY: '(860) 705-3417',
  EMAIL: 'info@aitransformationllc.com',
  SMS_OPT_IN_BODY:
    "Hi — I'd like to talk about taking my app or product to market with AI Transformation.",
} as const

/** Opens the native SMS app with number + draft prefilled. */
export function getSmsConsultHref(
  body: string = CONTACT_CONFIG.SMS_OPT_IN_BODY,
): string {
  const encoded = encodeURIComponent(body)
  return `sms:${CONTACT_CONFIG.PHONE_E164}?body=${encoded}`
}

/** Opens the native phone dialer. */
export function getCallHref(): string {
  return `tel:${CONTACT_CONFIG.PHONE_E164}`
}
