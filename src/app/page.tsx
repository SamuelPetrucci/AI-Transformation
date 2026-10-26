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
import BookCallButton from '@/components/BookCallButton'
import SlideNav from '@/components/SlideNav'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Transformation LLC',
    url: 'https://aitransformationllc.com',
    logo: 'https://aitransformationllc.com/favicon.svg',
    description:
      'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.',
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
      name: 'Technology Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software',
            description:
              'Websites, apps, CRMs, booking tools, and custom project builds businesses own.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
            description:
              'AI receptionists, lead follow-up, content agents, and workflow automation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modern Technology Solutions',
            description:
              'Integrations, analytics, SaaS rebuilds, and practical tech upgrades.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Starter Social',
            description:
              '8 social media posts per month with AI-assisted captions and scheduling for $149/month.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Growth',
            description:
              '12 social media posts per month with Facebook and Instagram scheduling for $299/month.',
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
      <BookCallButton />
    </>
  )
}
