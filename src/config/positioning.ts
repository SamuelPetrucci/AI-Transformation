/**
 * Umbrella positioning for AI Transformation LLC.
 * Use across site, emails, social, schema, and agent prompts.
 */
export const POSITIONING = {
  company: 'AI Transformation LLC',
  shortName: 'AI Transformation',
  /** Canonical one-liner — website, email, social */
  statement:
    'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI agents, and modern technology solutions.',
  /** Hero headline (brand stays separate / larger) */
  headline: 'Save time. Reduce costs. Grow.',
  /** Short support under headline (no need to repeat company name) */
  support:
    'Clear products to grow, save time, and cut what you spend on tech—open one line at a time.',
  metaTitle: 'AI Transformation LLC — Products to Grow, Save Time & Cut Tech Spend',
  metaDescription:
    'AI Transformation LLC: Content Engine, AI Agents, Custom Software you own (save on tech), and Training—clear products for business owners.',
  pillars: [
    {
      id: 'custom-software',
      title: 'Custom Software',
      description:
        'Websites, booking, CRM & ops software you own—including stack rebuilds that cut SaaS rent.',
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      description:
        'We fine-tune and train agents to carry out repetitive, error-prone tasks for your review.',
    },
    {
      id: 'modern-tech',
      title: 'Modern Technology Solutions',
      description: 'Content Engine, integrations, and the systems that tie growth to ops.',
    },
  ],
} as const
