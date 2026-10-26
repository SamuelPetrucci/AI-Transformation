import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AutomationShowcase from '@/components/AutomationShowcase'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import SocialAdsPackage from '@/components/SocialAdsPackage'
import SmartBooking from '@/components/SmartBooking'
import Footer from '@/components/Footer'
import HashNavigation from '@/components/HashNavigation'
import Chatbot from '@/components/Chatbot'
import SlideNav from '@/components/SlideNav'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Transformation LLC',
    url: 'https://aitransformationllc.com',
    logo: 'https://aitransformationllc.com/favicon.svg',
    description:
      'AI Transformation LLC specializes in cutting-edge AI solutions that drive business growth and operational efficiency. We provide AI strategy, automation, data analytics, and social media advertising packages.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-860-705-3417',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://linkedin.com/company/ai-transformation-llc',
      'https://twitter.com/aitransformation',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Strategy & Implementation',
            description:
              'Develop comprehensive AI strategies and implement cutting-edge solutions tailored to your business needs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Process Automation',
            description:
              'Streamline operations with intelligent automation that reduces costs and increases efficiency.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Analytics & Insights',
            description:
              'Transform raw data into actionable insights that drive informed business decisions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Growth',
            description:
              '12 social media posts per month with Facebook and Instagram scheduling, content calendar, and performance reporting for $299/month.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facebook Ads + Social',
            description:
              'Social media management plus Meta advertising campaign management for $499/month. Client pays ad spend separately.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HashNavigation />
      <main className="slideshow-root min-h-screen bg-[#050505] text-white">
        <Header />
        <SlideNav />
        <Hero />
        <Features />
        <AutomationShowcase />
        <HowItWorks />
        <WhyChooseUs />
        <SocialAdsPackage />
        <SmartBooking />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
