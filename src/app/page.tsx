import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DemoShowcase from '@/components/DemoShowcase'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import SmartBooking from '@/components/SmartBooking'
import Footer from '@/components/Footer'
import HashNavigation from '@/components/HashNavigation'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Transformation LLC",
    "url": "https://aitransformationllc.com",
    "logo": "https://aitransformationllc.com/favicon.svg",
    "description": "AI Transformation LLC specializes in cutting-edge AI solutions that drive business growth and operational efficiency. We provide AI strategy, automation, data analytics, and industry-grade protection.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/ai-transformation-llc",
      "https://twitter.com/aitransformation"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy & Implementation",
            "description": "Develop comprehensive AI strategies and implement cutting-edge solutions tailored to your business needs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Streamline operations with intelligent automation that reduces costs and increases efficiency."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Analytics & Insights",
            "description": "Transform raw data into actionable insights that drive informed business decisions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industry-Grade Protection",
            "description": "Build secure solutions with industry-standard technologies, comprehensive monitoring, and robust protection systems."
          }
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
      <HashNavigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <Hero />
        <Features />
        <DemoShowcase />
        <HowItWorks />
        <WhyChooseUs />
        <SmartBooking />
        <Footer />
      </main>
    </>
  )
}
