import { Metadata } from 'next'
import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceProcess from '@/components/ServiceProcess'
import ServiceCTA from '@/components/ServiceCTA'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'AI Services - Custom Development & Business Solutions | AI Transformation LLC',
  description: 'Comprehensive AI services including custom landing pages, POS systems, AI receptionists, data analytics, project management, and development partnerships. Bring your ideas to impactful solutions.',
  keywords: [
    'AI services',
    'custom development',
    'AI integration',
    'POS systems',
    'AI receptionist',
    'data analytics',
    'project management',
    'business automation',
    'AI consulting',
    'development partnership'
  ],
  openGraph: {
    title: 'AI Services - Custom Development & Business Solutions',
    description: 'Comprehensive AI services including custom landing pages, POS systems, AI receptionists, data analytics, and development partnerships.',
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
    title: 'AI Services - Custom Development & Business Solutions',
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
