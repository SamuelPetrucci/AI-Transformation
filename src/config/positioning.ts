/**
 * Umbrella positioning for AI Transformation LLC.
 * Use across site, emails, social, schema, and agent prompts.
 *
 * Layer: go-to-market technology partner — bring app ideas / products /
 * in-house apps to market fast, with production-grade auth & security,
 * then manage and maintain for maximum uptime.
 */
export const POSITIONING = {
  company: 'AI Transformation LLC',
  shortName: 'AI Transformation',
  role: 'Go-to-market technology partner',
  /** Canonical one-liner — website, email, social */
  statement:
    'AI Transformation LLC is your go-to-market technology partner—we bring app ideas, products, and in-house applications to life and to market fast, then manage and maintain them for maximum uptime.',
  /** Hero headline (brand stays separate / larger) */
  headline: 'From idea to market. Fast.',
  /** Short support under headline (no need to repeat company name) */
  support:
    'Have an app idea, a product, or an in-house application? We build it, launch it, and help you run it—with authentication, role-based access, biometrics and passkeys, and secure storage for sensitive data—then manage and maintain it for maximum uptime.',
  /** Secondary line used in footers / schema when a shorter blurb is needed */
  shortSupport:
    'Save time, reduce costs, and grow—while we take your software from concept to market and keep it reliable.',
  metaTitle: 'AI Transformation LLC — Go-to-Market Technology Partner',
  metaDescription:
    'AI Transformation LLC: go-to-market technology partner. Bring app ideas and products to market fast—auth, RBAC, biometrics, passkeys, secure storage—then manage and maintain for maximum uptime.',
  capabilities: [
    {
      id: 'gtm',
      title: 'Lightning-fast go-to-market',
      description:
        'Concept to launch for app ideas, products, and in-house applications—so people instantly see how the tech brings your vision to life.',
    },
    {
      id: 'auth-security',
      title: 'Auth, roles & security',
      description:
        'User authentication, role-based access, security measures, biometrics and passkeys, and secure storage for sensitive data.',
    },
    {
      id: 'manage',
      title: 'Manage & maintain',
      description:
        'After launch we manage and help maintain your app or service—ongoing partnership, not a handoff and disappear.',
    },
    {
      id: 'uptime',
      title: 'Maximum uptime',
      description:
        'Monitoring, fixes, and care aimed at keeping your service available when your customers need it.',
    },
  ],
  pillars: [
    {
      id: 'custom-software',
      title: 'Custom Software',
      description:
        'Websites, booking, CRM, and operation software you own—built ready for auth, roles, and secure data.',
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
      description:
        'Content Engines, Own Your Tech Stack rebuilds, and go-to-market builds with biometrics, passkeys, and secure storage—then managed for maximum uptime.',
    },
  ],
} as const
