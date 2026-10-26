import { Metadata } from 'next'
import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceProcess from '@/components/ServiceProcess'
import ServiceCTA from '@/components/ServiceCTA'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'Services — Custom Software, AI Automation & Modern Tech | AI Transformation LLC',
  description:
    'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions—from $149/mo growth packages to custom builds.',
  keywords: [
    'custom software',
    'AI automation',
    'AI receptionist',
    'modern technology solutions',
    'social media packages',
    'business automation',
    'AI consulting',
    'custom development',
  ],
  openGraph: {
    title: 'Services — Custom Software, AI Automation & Modern Tech',
    description:
      'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.',
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
    title: 'Services — Custom Software, AI Automation & Modern Tech',
    description: 'Comprehensive AI services including custom landing pages, POS systems, AI receptionists, data analytics, and development partnerships.',
    images: ['/og-image.jpg']
  }
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
            "name": "Knowledge Base & Consulting"
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
      <main className="min-h-screen bg-[#050505] text-white">
        <Header />
        <ServicesHero />
        <ServiceCategories />
        <ServiceProcess />
        <ServiceCTA />
      </main>
      <Chatbot />
    </>
  )
}
