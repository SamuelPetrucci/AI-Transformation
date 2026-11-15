import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookCallButton from '@/components/BookCallButton'
import ProductsExplorer from '@/components/ProductsExplorer'
import { ALL_PRODUCTS, PRODUCT_LINES } from '@/config/products'

export const metadata: Metadata = {
  title: 'Products — Diagrams for Every Offer | AI Transformation LLC',
  description:
    'Explore every product line with a clear systems diagram: Content Engine, AI Assistance, Custom Software, Save on Tech, and Training & Knowledge.',
  keywords: [
    'content engine',
    'AI assistance',
    'custom software',
    'save on tech',
    'product offers',
    'business automation',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products — Clear Offers with Diagrams',
    description:
      'Five product lines with flow diagrams—grow, save time, cut spend, or own your stack.',
    type: 'website',
    url: 'https://aitransformationllc.com/products',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Transformation LLC Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Clear Offers with Diagrams',
    description:
      'Five product lines with flow diagrams—grow, save time, cut spend, or own your stack.',
    images: ['/og-image.jpg'],
  },
}

type ProductsPageProps = {
  searchParams?: Promise<{ line?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = (await searchParams) ?? {}
  const initialLineId =
    typeof params.line === 'string' &&
    PRODUCT_LINES.some((l) => l.id === params.line)
      ? params.line
      : undefined

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'AI Transformation Products',
    url: 'https://aitransformationllc.com/products',
    provider: {
      '@type': 'Organization',
      name: 'AI Transformation LLC',
      url: 'https://aitransformationllc.com',
    },
    itemListElement: ALL_PRODUCTS.map((product, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: product.name,
        description: `${product.job}. ${product.outcome}. ${product.price.amount}${
          product.price.note ? ` (${product.price.note})` : ''
        }.`,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-transparent text-ink">
        <Header />
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.16),transparent_55%)]"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="overline mb-4">Product offers</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Every line, with a diagram.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-ink-soft sm:text-lg">
              Pick a product line to see how it works—nodes and flow first, pricing and includes
              underneath. No wall of text.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <ProductsExplorer initialLineId={initialLineId} />
        </section>

        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
