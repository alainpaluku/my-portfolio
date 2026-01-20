/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        dark: '#0a0a0f',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      animation: {
        // Animations de base
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        
        // Animations d'entrée consolidées (même durée et timing)
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeIn 0.6s ease-out forwards, slideUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        
        // Animations d'effet
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'skeleton': 'skeleton-loading 1.5s infinite',
      },
      keyframes: {
        // Animations de base
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        
        // Animations d'entrée simplifiées
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Animations d'effet
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      backdropBlur: {
        'premium': '40px',
      }
    }
  },
  plugins: [],
}
