/** Recognizable social platform marks for Content Engine demos. */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

export function InstagramLogo({ title = 'Instagram', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.75a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
    </svg>
  )
}

export function FacebookLogo({ title = 'Facebook', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M14 8.2V6.6c0-.7.1-1.1 1.1-1.1H16.5V3h-2.3C11.5 3 10.4 4.6 10.4 6.9v1.3H8.5v2.6h1.9V21h3.6v-9.2h2.4l.4-2.6H14z" />
    </svg>
  )
}

export function LinkedInLogo({ title = 'LinkedIn', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M6.3 9.5H3.6V20h2.7V9.5zM4.95 4A1.55 1.55 0 1 0 5 7.1 1.55 1.55 0 0 0 4.95 4zM20.4 13.4c0-3.1-1.7-4.5-3.9-4.5a3.4 3.4 0 0 0-3 1.6V9.5h-2.7c0 .9 0 10.5 0 10.5h2.7v-5.9c0-.3 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.6V20h2.8v-6.6z" />
    </svg>
  )
}

export function XLogo({ title = 'X', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M17.6 3h2.7l-5.9 6.7L22 21h-5.5l-4.3-5.6L7.3 21H4.6l6.3-7.2L2.5 3h5.6l3.9 5.2L17.6 3zm-1 16.2h1.5L7.5 4.7H5.9l10.7 14.5z" />
    </svg>
  )
}

export function TikTokLogo({ title = 'TikTok', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M16.6 4.1c.8 1.1 1.9 1.9 3.2 2.2v2.4a6.8 6.8 0 0 1-3.2-.9v6.3a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.5a3.2 3.2 0 1 0 2.3 3.1V3h2.5c0 .4 0 .7.1 1.1z" />
    </svg>
  )
}

export function YouTubeLogo({ title = 'YouTube', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M22.5 7.6a2.9 2.9 0 0 0-2-2C18.7 5.2 12 5.2 12 5.2s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1.1 12a30 30 0 0 0 .4 4.4 2.9 2.9 0 0 0 2 2c1.8.4 8.5.4 8.5.4s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .4-4.4 30 30 0 0 0-.4-4.4zM10 15.1V8.9l5.5 3.1L10 15.1z" />
    </svg>
  )
}

export type PlatformId = 'instagram' | 'facebook' | 'linkedin' | 'x' | 'tiktok' | 'youtube'

export const PLATFORMS: {
  id: PlatformId
  name: string
  Logo: typeof InstagramLogo
  color: string
}[] = [
  { id: 'instagram', name: 'Instagram', Logo: InstagramLogo, color: '#E1306C' },
  { id: 'facebook', name: 'Facebook', Logo: FacebookLogo, color: '#1877F2' },
  { id: 'linkedin', name: 'LinkedIn', Logo: LinkedInLogo, color: '#0A66C2' },
  { id: 'x', name: 'X', Logo: XLogo, color: '#111111' },
  { id: 'tiktok', name: 'TikTok', Logo: TikTokLogo, color: '#25F4EE' },
  { id: 'youtube', name: 'YouTube', Logo: YouTubeLogo, color: '#FF0000' },
]
