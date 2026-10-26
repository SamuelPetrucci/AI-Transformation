import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Agent-Powered Insights | AI Transformation LLC',
  description:
    'Daily insights from our Grok content agent pipeline—blog and social drafts we run on ourselves before we run them for clients.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <main className="min-h-screen bg-[#050505] text-white">
        <Header />
        <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.3),transparent_55%)]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="overline mb-4 text-violet-300">Lead by example</p>
            <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Blog — written with the same agents we deploy for clients
            </h1>
            <p className="mt-5 max-w-2xl text-zinc-400">
              Our daily Grok content agent drafts posts and social copy. Humans approve. Then we
              publish. See the full orchestration steps on{' '}
              <Link href="/agents" className="text-violet-300 underline-offset-4 hover:underline">
                Agent Ops
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-panel group flex flex-col rounded-3xl p-6 transition hover:border-violet-400/30"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-xl font-medium text-white group-hover:text-violet-200">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
                    <span>{post.date}</span>
                    <span className="text-violet-300/80">
                      {post.generatedBy === 'grok-content-agent' ? 'Grok agent draft' : 'Human'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
