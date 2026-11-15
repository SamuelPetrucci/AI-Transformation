import { Metadata } from 'next'
import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceProcess from '@/components/ServiceProcess'
import ServiceCTA from '@/components/ServiceCTA'
import BookCallButton from '@/components/BookCallButton'

export const metadata: Metadata = {
  title: 'Products — Content Engine, AI Agents, Software & Save on Tech | AI Transformation LLC',
  description:
    'Buy clear products: Content Engine, AI Agents, CRM & custom software, Stack Rebuild, Staff Tech Training, Maintenance & Support retainers, and more.',
  keywords: [
    'content engine',
    'AI receptionist',
    'custom software',
    'save on tech',
    'AI agents',
    'business automation',
    'stack rebuild',
    'staff tech training',
    'maintenance retainer',
    'support retainer',
  ],
  openGraph: {
    title: 'Products — Grow, Save Time & Cut Tech Spend',
    description:
      'Content Engine, AI Agents, Custom Software, Save on Tech, and Training & Support—including maintenance and support retainers.',
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
    title: 'Products — Grow, Save Time & Cut Tech Spend',
    description:
      'Content Engine, AI Agents, Custom Software, Save on Tech, and Training & Support—including maintenance and support retainers.',
    images: ['/og-image.jpg'],
  },
}

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Services",
    "description": "Comprehensive AI services including custom development, business automation, data analytics, and AI-powered solutions",
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
