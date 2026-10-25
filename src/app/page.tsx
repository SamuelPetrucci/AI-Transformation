import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ThemeShowcase from '@/components/ThemeShowcase'
import SocialAdsPackage from '@/components/SocialAdsPackage'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
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
      'AI Transformation LLC specializes in cutting-edge AI solutions, custom landing themes, and social media advertising packages that drive business growth.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
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
      name: 'AI & Growth Services',
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
            name: 'Custom Landing Themes',
            description:
              'Production-ready website themes with motion, conversion structure, and brand customization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media & Advertising Package',
            description:
              'Content systems, paid media, creative production, and performance reporting for pipeline growth.',
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
        <WhyChooseUs />
        <ThemeShowcase />
        <SocialAdsPackage />
        <Features />
        <HowItWorks />
        <SmartBooking />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
