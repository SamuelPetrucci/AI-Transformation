import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookCallButton from '@/components/BookCallButton'
import AgentOpsPlaybook from '@/components/AgentOpsPlaybook'

export const metadata: Metadata = {
  title: 'Agent Ops — Daily Blog & Social Orchestration | AI Transformation LLC',
  description:
    'How AI Transformation runs a Grok content agent for daily blog and social posting—and the exact steps we implement for client companies.',
}

export default function AgentsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#050505] text-white">
        <Header />
        <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_55%)]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="overline mb-4 text-violet-300">Lead by example</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Agent Ops: how we orchestrate content agents
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400 sm:text-lg">
              We run a daily Grok-powered agent that drafts blog posts and social captions for AI
              Transformation—then we sell and install the same pattern for your company. Here are the
              steps.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/blog" className="cta-pill">
                Read the agent blog
              </Link>
              <Link
                href="/#booking"
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                Get this for your business
              </Link>
            </div>
          </div>
        </section>
        <AgentOpsPlaybook />
        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
