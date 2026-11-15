import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AutomationShowcase from '@/components/AutomationShowcase'
import HowItWorks from '@/components/HowItWorks'
import ProductsCatalog from '@/components/ProductsCatalog'
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
      'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI assistance, and modern technology solutions.',
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HashNavigation />
      <main className="slideshow-root min-h-screen text-ink">
        <Header />
        <SlideNav />
        <Hero />
        <ProductsCatalog />
        <AutomationShowcase />
        <SocialAdsPackage />
        <HowItWorks />
        <SmartBooking />
        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
