export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  socialHook: string
  body: string[]
  generatedBy: 'grok-content-agent' | 'human'
}

/**
 * Lead-by-example blog posts produced (or staged) by the daily Grok content agent.
 * New posts are appended by scripts/content-agent/run.mjs during the daily run.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-we-orchestrate-daily-content-agents',
    title: 'How We Orchestrate Daily Blog & Social Agents (Lead by Example)',
    excerpt:
      'We run the same agent stack we sell: a Grok-powered content agent drafts a blog post and social copy every day, then humans approve before publish.',
    date: '2026-10-25',
    author: 'AI Transformation LLC',
    tags: ['agents', 'content', 'orchestration'],
    socialHook:
      'We don’t just sell AI agents—we run them on ourselves. Here’s our daily Grok content pipeline for blog + social.',
    generatedBy: 'grok-content-agent',
    body: [
      'Most agencies talk about automation. We ship it on our own marketing first.',
      'Every weekday, a Grok content agent wakes up, pulls a topic from our content calendar, drafts a blog article for this site, and writes platform-ready social captions for Facebook, Instagram, and X.',
      'Nothing auto-publishes without a human gate. The agent creates files and drafts; we approve, then schedule through our Social Growth / Ads packages—or push to the blog via PR.',
      'That “approval gate” is intentional. Clients get the speed of AI with brand-safe control.',
      'If you want the same system for your business, the steps are identical: calendar → generate → review → publish → report. We document the full playbook on our Agent Ops page.',
    ],
  },
  {
    slug: 'five-ways-agents-cut-sm-marketing-cost',
    title: '5 Ways Agents Cut Small-Business Marketing Cost Without Looking Cheap',
    excerpt:
      'From caption drafts to lead follow-up, agents remove the expensive busywork—so your $299 Social Growth package actually compounds.',
    date: '2026-10-24',
    author: 'AI Transformation LLC',
    tags: ['marketing', 'smb', 'roi'],
    socialHook:
      'Your marketing retainer shouldn’t pay for busywork. Here are 5 agent moves that keep quality high and cost lean.',
    generatedBy: 'grok-content-agent',
    body: [
      'SMBs don’t need a 10-person content team. They need consistency.',
      '1) AI-assisted captions and graphics cut creation time without generic spam—especially when you keep a brand voice brief in the knowledge base.',
      '2) Scheduling agents remove the “did we post today?” tax.',
      '3) Lead follow-up agents reply in minutes, not days—protecting paid ad spend.',
      '4) Performance digests summarize what worked so humans decide strategy, not spreadsheets.',
      '5) Ops reengineering retires redundant SaaS tools that quietly drain budgets every month.',
      'That’s why we price Starter Social at $149 and lead with Social Growth at $299—standardized production, clear boundaries, recurring value.',
    ],
  },
  {
    slug: 'discovery-to-pilot-in-four-weeks',
    title: 'Discovery to Pilot in Four Weeks: Our Implementation Pattern',
    excerpt:
      'The same pattern we use for client agents: map the process, score ROI, pilot one workflow, then scale what works.',
    date: '2026-10-23',
    author: 'AI Transformation LLC',
    tags: ['implementation', 'discovery', 'process'],
    socialHook:
      'Don’t boil the ocean. Our 4-week discovery→pilot pattern is how we stand up agents that stick.',
    generatedBy: 'grok-content-agent',
    body: [
      'Week 1 — Discover: process map, tool audit, pain × ROI scoring.',
      'Week 2 — Design: agent scopes, integrations, success metrics, guardrails.',
      'Week 3 — Pilot: build in sandbox, run 10–20 real scenarios, measure handle time and error rate.',
      'Week 4 — Decide: go / no-go, then production with monitoring and a human escalation path.',
      'This is how we implement AI receptionists, lead follow-up, and content agents—including the ones that write this blog.',
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
