/**
 * Umbrella positioning for AI Transformation LLC.
 * Use across site, emails, social, schema, and agent prompts.
 */
export const POSITIONING = {
  company: 'AI Transformation LLC',
  shortName: 'AI Transformation',
  /** Canonical one-liner — website, email, social */
  statement:
    'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.',
  /** Hero headline (brand stays separate / larger) */
  headline: 'Save time. Reduce costs. Grow.',
  /** Short support under headline (no need to repeat company name) */
  support:
    'Custom software, AI automation, and modern technology solutions—so you can scale without the tech overwhelm.',
  metaTitle: 'AI Transformation LLC — Custom Software, AI Automation & Modern Tech',
  metaDescription:
    'AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions. From $149/mo social packages to AI receptionists and custom builds.',
  pillars: [
    {
      id: 'custom-software',
      title: 'Custom Software',
      description:
        'Websites, apps, CRMs, booking tools, and full project builds—owned by you, built for how you actually work.',
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description:
        'AI receptionists, lead follow-up, content agents, and workflow automation that cut busywork and response time.',
    },
    {
      id: 'modern-tech',
      title: 'Modern Technology Solutions',
      description:
        'Integrations, analytics, SaaS rebuilds, and growth packages like Social Starter ($149/mo)—practical tech that compounds.',
    },
  ],
} as const
