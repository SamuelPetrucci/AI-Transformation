/**
 * Shared product-demo motion — slow, consistent pacing so visitors can read.
 */
export const PRODUCT_EASE = [0.22, 1, 0.36, 1] as const

export const PRODUCT_MOTION = {
  /** Panel / tab content crossfade (seconds) */
  swap: 0.6,
  /** Expand/collapse panels (seconds) */
  expand: 0.55,
  /** Soft looping accents (seconds) */
  pulse: 3.4,
  /** Auto-advance for step-by-step demos (ms) */
  stepMs: 4200,
  /** Secondary pulse within a longer step (ms) */
  beatMs: 2600,
  /** Rotating feed / card cycles (ms) */
  rotateMs: 6000,
  /** One-click tour step (ms) */
  tourTickMs: 2200,
  tourStartMs: 1000,
  /** Pillar / highlight cycle (ms) */
  pillarMs: 7000,
} as const
