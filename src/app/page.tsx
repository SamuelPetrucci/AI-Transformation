import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AutomationShowcase from '@/components/AutomationShowcase'
import HowItWorks from '@/components/HowItWorks'
import GoToMarketPartner from '@/components/GoToMarketPartner'
import ProductsCatalog from '@/components/ProductsCatalog'
import Pricing from '@/components/Pricing'
import SocialAdsPackage from '@/components/SocialAdsPackage'
import SmartBooking from '@/components/SmartBooking'
import Footer from '@/components/Footer'
import HashNavigation from '@/components/HashNavigation'
import BookCallButton from '@/components/BookCallButton'
import SlideNav from '@/components/SlideNav'
import { ALL_PRODUCTS } from '@/config/products'
import { POSITIONING } from '@/config/positioning'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Transformation LLC',
    url: 'https://aitransformationllc.com',
    logo: 'https://aitransformationllc.com/favicon.svg',
    description: POSITIONING.statement,
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
      name: 'AI Transformation Products',
      itemListElement: ALL_PRODUCTS.map((product) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: product.name,
          description: `${product.job}. ${product.outcome}. ${product.price.amount}${
            product.price.note ? ` (${product.price.note})` : ''
          }.`,
        },
      })),
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
        <GoToMarketPartner />
        <ProductsCatalog />
        <AutomationShowcase />
        <SocialAdsPackage />
        <HowItWorks />
        <Pricing />
        <SmartBooking />
        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
