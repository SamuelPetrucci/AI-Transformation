/**
 * Umbrella positioning for AI Transformation LLC.
 * Use across site, emails, social, schema, and agent prompts.
 */
export const POSITIONING = {
  company: 'AI Transformation LLC',
  shortName: 'AI Transformation',
  /** Canonical one-liner — website, email, social */
  statement:
    'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI agent implementation, and modern technology solutions.',
  /** Hero headline (brand stays separate / larger) */
  headline: 'Save time. Reduce costs. Grow.',
  /** Short support under headline (no need to repeat company name) */
  support:
    'Clear products to grow, save time, and cut what you spend on tech—open one line at a time.',
  metaTitle: 'AI Transformation LLC — Products to Grow, Save Time & Cut Tech Spend',
  metaDescription:
    'AI Transformation LLC: Content Engine, AI agent implementation, Custom Software, Save on Tech, and Training—clear products for business owners.',
  pillars: [
    {
      id: 'custom-software',
      title: 'Custom Software',
      description: 'Websites, booking, and CRM & custom operation software you own.',
    },
    {
      id: 'ai-agent-implementation',
      title: 'AI agent implementation',
      description:
        'Audit efficiency, then agents on cron jobs or triggers for tasks as they come up.',
    },
    {
      id: 'modern-tech',
      title: 'Modern Technology Solutions',
      description: 'Content Engine, Save on Tech rebuilds, and the integrations that tie it together.',
    },
  ],
} as const
