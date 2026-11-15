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
    id: 'ai-workforce',
    name: 'AI Workforce',
    blurb:
      'Agents that answer, follow up, and run routines—implemented with staff training so your team stays in control.',
    goal: 'save-time',
    products: [
      {
        id: 'ai-receptionist',
        name: 'AI Receptionist',
        job: 'Answer calls and chats 24/7 without missing leads',
        outcome: 'Save front-desk time; book more consults after hours',
        price: { kind: 'quote', amount: 'Setup quote', note: 'Optional care plan after go-live' },
        includes: [
          'Trained on your services, hours, and FAQs',
          'Phone and/or chat coverage',
          'Handoff rules to a human when needed',
          'Staff training so the team can supervise',
        ],
      },
      {
        id: 'lead-followup',
        name: 'Lead Follow-up Agent',
        job: 'Chase every inbound lead until it’s booked or closed',
        outcome: 'Stop leaking leads; save sales hours on chase-downs',
        price: { kind: 'quote', amount: 'Setup quote' },
        includes: [
          'SMS/email sequences tied to your CRM or forms',
          'Qualification questions you approve',
          'Booking handoff to your calendar',
          'Human escalation path for edge cases',
        ],
      },
      {
        id: 'custom-agent',
        name: 'Custom Ops Agent',
        job: 'Automate a specific workflow your team repeats every week',
        outcome: 'Cut busywork; free people for higher-value work',
        price: { kind: 'quote', amount: 'Project quote' },
        includes: [
          'Discovery of the exact workflow to replace',
          'Agent build + tool integrations',
          'Guardrails, tests, and staff training',
          'Handoff playbook your team owns',
        ],
      },
      {
        id: 'agent-care',
        name: 'Agent Care Plan',
        job: 'Keep agents accurate, monitored, and improving',
        outcome: 'Protect ROI without hiring an in-house AI team',
        price: { kind: 'range', amount: '$99–$299/mo' },
        includes: [
          'Monitoring and uptime checks',
          'Prompt and knowledge updates',
          'Monthly performance digest',
          'Priority fixes when something drifts',
        ],
      },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    blurb:
      'Websites, booking tools, CRMs, and ops hubs built for how you work—and owned by you.',
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
        id: 'ops-hub',
        name: 'Custom CRM / Ops Hub',
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
