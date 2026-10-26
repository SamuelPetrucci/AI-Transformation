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
    slug: 'lead-by-example-daily-grok-marketing-bot',
    title: 'Lead by Example: Running a Daily Grok Marketing Bot on Ourselves',
    excerpt:
      'Before we sell an AI marketing agent to anyone, we run one on our own business every weekday. Here’s how it works, with a human approving every post.',
    date: '2026-10-26',
    author: 'AI Transformation LLC',
    tags: ['agents', 'marketing', 'grok', 'lead-by-example'],
    socialHook: "We don't sell AI agents we won't run on ourselves.",
    generatedBy: 'grok-content-agent',
    body: [
      "We have a simple rule at AI Transformation LLC: we don't recommend an AI agent to a client until we've run it on our own business. Marketing is the first place we put that rule to work.",
      'Every weekday, a Grok-powered marketing bot drafts one blog post along with captions for Facebook, Instagram, LinkedIn, and X. It works from a topic, our brand voice, and a fixed output format, so each draft arrives structured and ready to review instead of as a loose block of text.',
      'Then the bot stops. Nothing publishes automatically. A person on our team reads the draft, checks the facts, adjusts the tone, and approves or rejects it. That human approval gate is the core of the design, because an agent that posts unchecked will eventually put your name on something you’d never say.',
      'Running the bot on ourselves teaches us things a demo can’t. We see which instructions produce useful drafts, where the model drifts into generic phrasing, and which guardrails matter, like banning invented statistics and holding a consistent voice from one day to the next.',
      'For a small business owner, the value isn’t handing marketing off completely. The value is never starting from a blank page again. Reviewing and refining a solid draft takes far less effort than writing from scratch, and you stay in control of every word that goes out.',
      'The same pattern works beyond marketing: an agent does the repetitive first pass, and a person makes the final call. You can see the social content engine on our homepage, including the workflow that drafted the first version of this post.',
      'If you want to know what a supervised agent could take off your plate, start with a conversation. We’ll show you what we run ourselves and help you decide whether it fits your business.',
    ],
  },
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
      'If you want the same system for your business, the steps are identical: calendar → generate → review → publish → report. See the social content engine demo on the homepage.',
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
