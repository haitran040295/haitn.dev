import type { Config } from 'tailwindcss';

/**
 * Token manifest — Tran Ngoc Hai landing page.
 *
 * Tailwind v4 is loaded via `@import "tailwindcss"` in src/styles/global.css and
 * bridged to this file with `@config "../../tailwind.config.ts";`.
 *
 * Two-layer tokens:
 *   • Primitives (gray / accent ramps, spacing, radius, fonts, type) live here as
 *     utilities: bg-accent-500, p-4, rounded-md, text-h1, font-display, …
 *   • Semantic, theme-aware tokens (bg-canvas, text-primary, …) live in
 *     global.css as CSS custom properties + @utility classes.
 *
 * `spacing` and `borderRadius` are set at the top level (NOT under `extend`) so
 * they REPLACE Tailwind's defaults — this disables p-7, rounded-3xl, etc. Only
 * the scales below exist. `0` is kept because inset-0 / top-0 / m-0 depend on it.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    // ── Replaced scales (no values outside these exist) ──────────────────────
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      12: '48px',
      16: '64px',
      24: '96px',
      32: '128px',
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '20px',
      full: '9999px',
    },
    // ── Extended scales (merged onto Tailwind defaults) ──────────────────────
    extend: {
      colors: {
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        // Variable-font family names first so the self-hosted webfonts render,
        // then the plain names from the manifest, then system fallbacks.
        display: ['Space Grotesk Variable', 'Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        eyebrow: ['13px', { letterSpacing: '0.08em' }],
        'body-sm': ['14px', '1.55'],
        body: ['16px', '1.55'],
        'body-lg': ['18px', '1.55'],
        h4: ['20px', '1.3'],
        h3: ['24px', '1.25'],
        h2: ['32px', '1.2'],
        h1: ['44px', '1.1'],
        display: ['clamp(48px, 7vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        // Layout constraints (not on the spacing grid).
        content: '1100px', // page container (per Hero spec; brief's global width is 1152 — see note)
        narrow: '900px', // narrower container for personal sections (About)
        band: '800px', // centered call-to-action band (Contact)
        measure: '640px', // readable text column
      },
      screens: {
        // Two-column project grid threshold (Work spec: 1 column below 900px).
        cards: '900px',
      },
    },
  },
  plugins: [],
} satisfies Config;
