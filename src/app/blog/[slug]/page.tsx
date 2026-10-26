import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookCallButton from '@/components/BookCallButton'
import { getAllPosts, getPost } from '@/lib/blog'

const site = 'https://aitransformationllc.com'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post not found' }
  const url = `${site}/blog/${post.slug}`
  return {
    title: `${post.title} | AI Transformation LLC`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: 'AI Transformation LLC',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: site,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Transformation LLC',
      url: site,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${site}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <main className="min-h-screen bg-[#050505] text-white">
        <Header />
        <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
          <Link href="/blog" className="text-sm text-violet-300 hover:underline">
            ← All posts
          </Link>
          <p className="overline mt-8 mb-4">{post.date}</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-zinc-400">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-400"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-wider text-violet-300">
              {post.generatedBy === 'grok-content-agent'
                ? 'Drafted by Grok content agent'
                : 'Human authored'}
            </span>
          </div>

          <div className="prose-invert mt-10 space-y-5">
            {post.body.map((para) => (
              <p key={para.slice(0, 24)} className="text-base leading-relaxed text-zinc-300">
                {para}
              </p>
            ))}
          </div>

          <aside className="glass-panel mt-12 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-wider text-violet-300">
              Social hook (agent output)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              &ldquo;{post.socialHook}&rdquo;
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              This caption is generated alongside the blog draft for Facebook / Instagram / X. Humans
              approve before scheduling—same workflow we sell in Social Growth and Ads packages.
            </p>
            <Link
              href="/#social-ads"
              className="mt-4 inline-block text-sm text-violet-300 hover:underline"
            >
              See the social content engine →
            </Link>
          </aside>
        </article>
        <Footer />
      </main>
      <BookCallButton />
    </>
  )
}
