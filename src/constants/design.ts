/**
 * Constantes de design centralisées pour maintenir la cohérence
 * à travers tout le projet
 */

export const ASPECT_RATIOS = {
  ARTICLE: 'aspect-video',
  PROJECT: 'aspect-[4/3]',
  THUMBNAIL: 'aspect-square',
  PROFILE: 'aspect-square',
} as const;

export const FONT_SIZES = {
  CAPTION: 'text-[10px] sm:text-xs',
  BODY_SM: 'text-xs sm:text-sm',
  BODY: 'text-sm sm:text-base',
  BODY_LG: 'text-base sm:text-lg',
  HEADING_SM: 'text-sm sm:text-base lg:text-lg',
  HEADING: 'text-lg sm:text-xl lg:text-2xl',
  HEADING_LG: 'text-2xl sm:text-3xl lg:text-4xl',
  HEADING_XL: 'text-3xl sm:text-4xl lg:text-5xl',
} as const;

export const SPACING = {
  SECTION: 'py-8 sm:py-12 lg:py-16 xl:py-24',
  SECTION_COMPACT: 'py-6 sm:py-8 lg:py-12',
  SECTION_PADDING: 'px-3 sm:px-4 md:px-6 lg:px-12',
  CARD: 'p-4 sm:p-5 lg:p-6',
  CARD_COMPACT: 'p-3 sm:p-4',
  GAP_SM: 'gap-2 sm:gap-3',
  GAP: 'gap-4 sm:gap-6',
  GAP_LG: 'gap-6 sm:gap-8 lg:gap-10',
} as const;

export const GRID = {
  COLS_1: 'grid-cols-1',
  COLS_2: 'grid-cols-1 sm:grid-cols-2',
  COLS_3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  COLS_4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  COLS_ARTICLES: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
  COLS_PROJECTS: 'grid-cols-1 sm:grid-cols-2',
} as const;

export const ROUNDED = {
  SM: 'rounded-lg',
  MD: 'rounded-xl',
  LG: 'rounded-2xl',
  CARD: 'rounded-xl sm:rounded-2xl',
} as const;

export const TRANSITIONS = {
  FAST: 'transition-all duration-200',
  NORMAL: 'transition-all duration-300',
  SLOW: 'transition-all duration-500',
  COLORS: 'transition-colors duration-300',
  TRANSFORM: 'transition-transform duration-300',
} as const;

export const BORDERS = {
  DEFAULT: 'border-[var(--color-border)]',
  HOVER: 'hover:border-[var(--color-text)]',
  ACCENT: 'hover:border-[var(--color-accent)]/30',
} as const;

export const COLORS = {
  TEXT: 'text-[var(--color-text)]',
  TEXT_MUTED: 'text-[var(--color-text-muted)]',
  ACCENT: 'text-[var(--color-accent)]',
  BG: 'bg-[var(--color-bg)]',
  BG_SECONDARY: 'bg-[var(--color-bg-secondary)]',
} as const;

// Types pour TypeScript
export type AspectRatio = keyof typeof ASPECT_RATIOS;
export type FontSize = keyof typeof FONT_SIZES;
export type Spacing = keyof typeof SPACING;
export type Grid = keyof typeof GRID;
export type Rounded = keyof typeof ROUNDED;
export type Transition = keyof typeof TRANSITIONS;
