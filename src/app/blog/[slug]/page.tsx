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
      <main className="min-h-screen bg-transparent text-ink">
        <Header />
        <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
          <Link href="/blog" className="text-sm text-signal hover:underline">
            ← All posts
          </Link>
          <p className="overline mt-8 mb-4">{post.date}</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-ink-soft">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] uppercase tracking-wider text-ink-soft"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-[10px] uppercase tracking-wider text-signal">
              {post.generatedBy === 'grok-content-agent'
                ? 'Drafted by Grok content agent'
                : 'Human authored'}
            </span>
          </div>

          <div className="prose-invert mt-10 space-y-5">
            {post.body.map((para) => (
              <p key={para.slice(0, 24)} className="text-base leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          <aside className="glass-panel mt-12 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-wider text-signal">
              Social hook (agent output)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              &ldquo;{post.socialHook}&rdquo;
            </p>
            <p className="mt-4 text-xs text-ink-soft/70">
              This caption is generated alongside the blog draft for Facebook / Instagram / X. Humans
              approve before scheduling—same workflow we sell in Social Growth and Ads packages.
            </p>
            <Link
              href="/#social-ads"
              className="mt-4 inline-block text-sm text-signal hover:underline"
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
