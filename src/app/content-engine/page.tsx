import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookCallButton from '@/components/BookCallButton'
import ContentEngineWalkthrough from '@/components/ContentEngineWalkthrough'

export const metadata: Metadata = {
  title: 'Content Engine — Social Demo & Human Approval | AI Transformation LLC',
  description:
    'See how the Content Engine works: train on your brand, plan scripts, human-approve every draft, then post and advertise on the platforms you use.',
  keywords: [
    'content engine',
    'social media automation',
    'human approval',
    'product ads',
    'AI content',
  ],
  alternates: {
    canonical: '/content-engine',
  },
  openGraph: {
    title: 'Content Engine — Train, Approve, Post',
    description:
      'Interactive walkthrough of our social content engine with human checks and balances.',
    type: 'website',
    url: 'https://aitransformationllc.com/content-engine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Transformation Content Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Engine — Train, Approve, Post',
    description:
      'Interactive walkthrough of our social content engine with human checks and balances.',
    images: ['/og-image.jpg'],
  },
}

export default function ContentEnginePage() {
  return (
    <>
      <main className="min-h-screen bg-transparent text-ink">
        <Header />
        <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,143,117,0.14),transparent_55%)]"
          />
          <div className="relative z-10">
            <ContentEngineWalkthrough />
          </div>
        </section>
        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
