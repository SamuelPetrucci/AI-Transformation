/**
 * Shared product-demo motion — slow, consistent pacing so visitors can read.
 */
export const PRODUCT_EASE = [0.22, 1, 0.36, 1] as const

export const PRODUCT_MOTION = {
  /** Panel / tab content crossfade (seconds) */
  swap: 0.7,
  /** Expand/collapse panels (seconds) */
  expand: 0.55,
  /** Soft looping accents (seconds) */
  pulse: 4.2,
  /** Auto-advance for step-by-step demos (ms) */
  stepMs: 5200,
  /** Content-engine pipeline stages — slower so the diagram is readable (ms) */
  contentStepMs: 6500,
  /** Secondary pulse within a longer step (ms) */
  beatMs: 3000,
  /** Rotating feed / card cycles (ms) */
  rotateMs: 9000,
  /** One-click tour step (ms) */
  tourTickMs: 2800,
  tourStartMs: 1200,
} as const
