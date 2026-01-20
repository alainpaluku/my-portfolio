/**
 * Constantes d'animation centralisées
 * Réduit la duplication dans tailwind.config.mjs
 */

export const ANIMATION_DURATIONS = {
  FAST: '200ms',
  NORMAL: '300ms',
  SLOW: '500ms',
  VERY_SLOW: '1000ms',
} as const;

export const ANIMATION_TIMINGS = {
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  LINEAR: 'linear',
} as const;

export const BLUR_VALUES = {
  SM: '40px',
  MD: '60px',
  LG: '80px',
  XL: '100px',
  XXL: '120px',
} as const;

export const GLOW_SIZES = {
  MOBILE: {
    SM: '200px',
    MD: '300px',
    LG: '400px',
  },
  TABLET: {
    SM: '300px',
    MD: '400px',
    LG: '500px',
  },
  DESKTOP: {
    SM: '400px',
    MD: '600px',
    LG: '800px',
  },
} as const;

// Types pour TypeScript
export type AnimationDuration = keyof typeof ANIMATION_DURATIONS;
export type AnimationTiming = keyof typeof ANIMATION_TIMINGS;
export type BlurValue = keyof typeof BLUR_VALUES;
