/**
 * Sellable products for AI Transformation LLC.
 * Frame every offer as something a business owner can buy to save time, cut cost, or grow.
 */
export type ProductPrice =
  | { kind: 'monthly'; amount: string; note?: string }
  | { kind: 'range'; amount: string; note?: string }
  | { kind: 'quote'; amount: string; note?: string }

export type CatalogProduct = {
  id: string
  name: string
  /** One job this product does for the owner */
  job: string
  /** Time / money / growth outcome */
  outcome: string
  price: ProductPrice
  includes: string[]
  recommended?: boolean
}

export type ProductLine = {
  id: string
  name: string
  blurb: string
  /** Primary owner goal this line serves */
  goal: 'grow' | 'save-time' | 'save-money' | 'own-stack'
  products: CatalogProduct[]
}

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'content-engine',
    name: 'Content Engine',
    blurb:
      'Trained marketing agent, human approval on every draft, automated posting on any platforms you use—plus optional product ads.',
    goal: 'grow',
    products: [
      {
        id: 'content-starter',
        name: 'Content Engine Starter',
        job: 'Stay visible on one channel without hiring a marketer',
        outcome: 'Save hours every week; keep a steady presence',
        price: { kind: 'monthly', amount: '$149/mo' },
        includes: [
          'Agent trained on your business, brand, and logos',
          '8 SEO-minded posts / month',
          'Human approval before every publish',
          'One platform you choose',
        ],
      },
      {
        id: 'content-growth',
        name: 'Content Engine Growth',
        job: 'Compound organic reach across the channels that matter',
        outcome: 'Grow traffic and leads with a calendar that runs itself',
        price: { kind: 'monthly', amount: '$299/mo' },
        recommended: true,
        includes: [
          '12 posts / month across platforms you choose',
          'Script planning + monthly calendar',
          'Human checks & balances on every piece',
          'Basic performance report',
        ],
      },
      {
        id: 'content-ads',
        name: 'Content Engine + Product Ads',
        job: 'Pair organic posting with managed product advertising',
        outcome: 'Grow demand with paid + organic working together',
        price: {
          kind: 'monthly',
          amount: '$499/mo',
          note: 'Ad spend paid separately by you',
        },
        includes: [
          'Everything in Growth',
          'One product ad campaign managed',
          'Creative from past content—or a new ads plan',
          'Lead tracking + monthly ads report',
        ],
      },
    ],
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    blurb:
      'We fine-tune and train agents to carry out repetitive, error-prone tasks—then queue the work for your review so nothing ships without a human yes.',
    goal: 'save-time',
    products: [
      {
        id: 'efficiency-audit',
        name: 'Efficiency Audit',
        job: 'Find the highest-ROI places for AI agents in your business',
        outcome: 'Clear map of tasks to automate—before you spend on build',
        price: { kind: 'quote', amount: 'Audit quote' },
        includes: [
          'Process walkthrough with your team',
          'List of repetitive, error-prone tasks ready for agents',
          'Time/cost estimate per opportunity',
          'Recommended agent stack to implement first',
        ],
      },
      {
        id: 'scheduled-agents',
        name: 'Scheduled Agents (Cron)',
        job: 'Run recurring work on a schedule—reports, reminders, digests, cleanups',
        outcome: 'Save hours every week on work that should already be automatic',
        price: { kind: 'quote', amount: 'Setup quote' },
        includes: [
          'Agents fine-tuned for your workflows and wired to cron schedules you approve',
          'Tied into the apps you already use',
          'Human review before anything that matters goes out',
          'Staff handoff so the team can supervise',
        ],
      },
      {
        id: 'triggered-agents',
        name: 'Triggered Agents',
        job: 'Fire on application actions or tasks as they come up—leads, tickets, bookings, status changes',
        outcome: 'Faster response; fewer dropped balls when something hits the system',
        price: { kind: 'quote', amount: 'Setup quote' },
        includes: [
          'Triggers on form submits, CRM events, emails, or app webhooks',
          'AI Receptionist and lead follow-up patterns included when they fit',
          'Escalation to a human for edge cases and review queues',
          'Logging so you can see what ran and why',
        ],
      },
      {
        id: 'agent-care',
        name: 'Agent Care Plan',
        job: 'Keep agents accurate, monitored, and improving as your business changes',
        outcome: 'Protect ROI without hiring an in-house AI team',
        price: { kind: 'range', amount: '$99–$299/mo' },
        includes: [
          'Monitoring for failed runs and silent breaks',
          'Fine-tuning and rule updates as the business changes',
          'Monthly efficiency digest',
          'Priority fixes when something drifts',
        ],
      },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    blurb:
      'Websites, booking tools, CRMs, and custom operation software built for how you work—and owned by you.',
    goal: 'own-stack',
    products: [
      {
        id: 'website-system',
        name: 'Business Website System',
        job: 'A conversion-ready site that matches your brand and funnel',
        outcome: 'Grow inbound; stop paying for a site that doesn’t convert',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Design + build on a modern stack',
          'Lead capture and booking hooks',
          'SEO foundations',
          'Handoff + optional care',
        ],
      },
      {
        id: 'booking-system',
        name: 'Booking & Scheduling System',
        job: 'Let customers book without phone tag',
        outcome: 'Save admin time; fill the calendar automatically',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Online booking UX for your services',
          'Calendar and reminder integrations',
          'Staff views and rules you control',
          'Optional AI receptionist handoff',
        ],
      },
      {
        id: 'custom-operation-software',
        name: 'CRM & Custom Operation Software',
        job: 'One place for pipelines, jobs, and customer history',
        outcome: 'Save time hunting data; own the system of record',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Pipelines and roles matched to your process',
          'Integrations to forms, SMS, email, payments',
          'AI-ready structure for agents later',
          'Training for your team',
        ],
      },
    ],
  },
  {
    id: 'save-on-tech',
    name: 'Save on Tech',
    blurb:
      'Replace expensive SaaS you rent with software you own—or connect the tools you already have so nothing leaks.',
    goal: 'save-money',
    products: [
      {
        id: 'stack-rebuild',
        name: 'Stack Rebuild (Own vs Rent)',
        job: 'Rebuild a CRM, booking, or ops tool you already pay for',
        outcome: 'Cut recurring SaaS spend; keep upgrades you actually need',
        price: { kind: 'quote', amount: 'Project quote', note: 'Fixed build + low hosting vs per-seat rent' },
        includes: [
          'Audit of what you rent today',
          'Self-hosted rebuild of the core workflows',
          'Upgrades (AI, automation, integrations)',
          'Migration + staff training',
        ],
      },
      {
        id: 'integrations',
        name: 'Application Integrations',
        job: 'Connect the apps you already use so data and jobs flow',
        outcome: 'Save hours of copy-paste; fewer missed handoffs',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Map of current tools and gaps',
          'Reliable syncs and triggers',
          'Error alerts and logging',
          'Docs your team can maintain',
        ],
      },
      {
        id: 'analytics-dashboard',
        name: 'Analytics Dashboard',
        job: 'See the numbers that matter in one place',
        outcome: 'Faster decisions; less spreadsheet hunting',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'KPI dashboard from your sources',
          'Scheduled refresh + quality checks',
          'Role-based views',
          'Alerts when something drifts',
        ],
      },
    ],
  },
  {
    id: 'enablement',
    name: 'Training & Knowledge',
    blurb:
      'Get your people and your AI on the same playbook—so automation sticks.',
    goal: 'save-time',
    products: [
      {
        id: 'staff-ai-training',
        name: 'Staff AI Training',
        job: 'Teach your team how to run and supervise AI tools safely',
        outcome: 'Adoption that lasts; fewer shadow-IT experiments',
        price: { kind: 'quote', amount: 'Workshop quote' },
        includes: [
          'Live sessions tailored to your roles',
          'Playbooks for day-to-day use',
          'Prompt and approval habits',
          'Follow-up office hours option',
        ],
      },
      {
        id: 'knowledge-base',
        name: 'AI Knowledge Base',
        job: 'Turn SOPs, FAQs, and docs into a trusted source for agents',
        outcome: 'Accurate answers; less tribal knowledge risk',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Ingest policies, SOPs, product docs',
          'Retrieval with access controls',
          'Citations and guardrails',
          'Update path as the business changes',
        ],
      },
    ],
  },
]

/** Flat list for booking selects, schema, and chatbot prompts */
export const ALL_PRODUCTS: CatalogProduct[] = PRODUCT_LINES.flatMap((line) => line.products)

export function formatProductPrice(price: ProductPrice): string {
  if (price.note) return `${price.amount} · ${price.note}`
  return price.amount
}

export const PRODUCTS_BOOKING_OPTIONS = ALL_PRODUCTS.map((p) => {
  const amount = p.price.amount
  return `${p.name} (${amount})`
})
