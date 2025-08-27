import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DemoShowcase from '@/components/DemoShowcase'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import SmartBooking from '@/components/SmartBooking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
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
  )
}
