import { Metadata } from 'next'
import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceProcess from '@/components/ServiceProcess'
import ServiceCTA from '@/components/ServiceCTA'
import BookCallButton from '@/components/BookCallButton'

export const metadata: Metadata = {
  title: 'Products — Go-to-Market Builds & Managed Uptime | AI Transformation LLC',
  description:
    'Go-to-market products: Content Engine, AI Agents, Custom Software, Own Your Tech Stack, and Training & Support—auth, security, then managed for maximum uptime.',
  keywords: [
    'go-to-market',
    'content engine',
    'AI receptionist',
    'custom software',
    'user authentication',
    'passkeys',
    'biometrics',
    'maximum uptime',
    'AI agents',
    'stack rebuild',
    'maintenance retainer',
    'support retainer',
  ],
  openGraph: {
    title: 'Products — Go-to-Market Builds & Managed Uptime',
    description:
      'Bring products to market fast with production-grade security—then manage and maintain for maximum uptime.',
    type: 'website',
    url: 'https://aitransformationllc.com/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Transformation LLC Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Go-to-Market Builds & Managed Uptime',
    description:
      'Bring products to market fast with production-grade security—then manage and maintain for maximum uptime.',
    images: ['/og-image.jpg'],
  },
}

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Services",
    "description": "Go-to-market technology partner: custom development, AI agents, auth and security, and managed uptime for apps and services",
    "provider": {
      "@type": "Organization",
      "name": "AI Transformation LLC",
      "url": "https://aitransformationllc.com"
    },
    "serviceType": "AI Consulting and Development",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Development & AI Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Business Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Analytics & Dashboarding"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Training, Maintenance & Support"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-transparent text-ink">
        <Header />
        <ServicesHero />
        <ServiceCategories />
        <ServiceProcess />
        <ServiceCTA />
      </main>
      <BookCallButton />
    </>
  )
}
