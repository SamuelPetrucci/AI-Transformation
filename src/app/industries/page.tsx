import { Metadata } from 'next'
import Header from '@/components/Header'
import IndustriesHero from '@/components/IndustriesHero'

import IndustryBenefits from '@/components/IndustryBenefits'

import IndustryCTA from '@/components/IndustryCTA'

export const metadata: Metadata = {
  title: "AI Solutions for Industries - Insurance, Real Estate, Finance, Medical, Legal & Retail",
  description: "Transform your industry with AI solutions. We specialize in AI automation for insurance brokers, real estate agents, accounting firms, medical offices, law firms, and retail businesses. Boost efficiency and growth.",
  keywords: [
    "AI solutions for insurance brokers",
    "real estate AI automation",
    "accounting firm AI automation",
    "medical office automation",
    "law firm AI solutions",
    "retail AI technology",
    "industry-specific AI",
    "business automation by industry"
  ],
  openGraph: {
    title: "AI Solutions for Industries - Insurance, Real Estate, Accounting, Medical, Legal & Retail",
    description: "Transform your industry with AI solutions. We specialize in AI automation for insurance brokers, real estate agents, accounting firms, medical offices, law firms, and retail businesses.",
    url: 'https://aitransformationllc.com/industries',
    siteName: 'AI Transformation LLC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Solutions for Industries - AI Transformation LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Solutions for Industries - Insurance, Real Estate, Accounting, Medical, Legal & Retail",
    description: "Transform your industry with AI solutions. We specialize in AI automation for insurance brokers, real estate agents, accounting firms, medical offices, law firms, and retail businesses.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/industries',
  },
}

export default function IndustriesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Solutions for Industries",
    "description": "Transform your industry with AI solutions. We specialize in AI automation for insurance brokers, real estate agents, accounting firms, medical offices, law firms, and retail businesses.",
    "url": "https://aitransformationllc.com/industries",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Solutions for Insurance Brokers",
          "description": "Automate claims processing, customer service, and policy management with AI technology."
        },
        {
          "@type": "Service",
          "name": "AI Solutions for Real Estate Agents",
          "description": "Streamline property management, lead generation, and client communication with AI automation."
        },
                 {
           "@type": "Service",
           "name": "AI Solutions for Accounting Firms",
           "description": "Streamline bookkeeping, financial reporting, and tax preparation with intelligent automation."
         },
        {
          "@type": "Service",
          "name": "AI Solutions for Medical Offices",
          "description": "Improve patient care, appointment scheduling, and medical record management with AI."
        },
        {
          "@type": "Service",
          "name": "AI Solutions for Law Firms",
          "description": "Automate document review, case management, and legal research with AI technology."
        },
        {
          "@type": "Service",
          "name": "AI Solutions for Retail Businesses",
          "description": "Optimize inventory management, customer service, and sales forecasting with AI."
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <IndustriesHero />
        <IndustryBenefits />
        <IndustryCTA />
      </main>
    </>
  )
}
