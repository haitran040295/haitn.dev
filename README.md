# haitn — personal landing page

Astro 6 + Tailwind v4 + TypeScript (strict). Code-first, no Figma.

## Commands

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start dev server at `http://localhost:4321`       |
| `npm run build`   | Type-check (`astro check`) then build to `dist/`  |
| `npm run preview` | Preview the production build locally              |
| `npm run check`   | Type-check only                                   |

## Structure

```
src/
  components/   # one .astro per section + atoms (Button, ProjectCard, TechTag, SectionHeading) — built next
  layouts/      # BaseLayout.astro — SEO meta, fonts, theme toggle, smooth scroll
  pages/        # index.astro composes the sections
  styles/
    global.css  # theme custom properties (light/dark), base resets, font setup, @config bridge
  content/
    projects.json  # source data for the Work section
  assets/       # images, og-image (processed by Astro)
public/         # favicon.svg, resume.html (served as-is); robots.txt is generated at src/pages/robots.txt.ts
```

## Theming

- Default follows `prefers-color-scheme`.
- The toggle (top-right) sets `data-theme="light|dark"` on `<html>` and persists to `localStorage`.
- A `is:inline` script in `<head>` applies the saved choice before first paint (no flash).
- Tokens live in `src/styles/global.css`; map them to Tailwind utilities in `tailwind.config.ts`.

## Fonts

Self-hosted via `@fontsource-variable` (woff2). Heading = Space Grotesk Variable
(preloaded), body = Inter Variable. Swap packages in `BaseLayout.astro` +
`global.css` if the token manifest specifies different families.

## Deploy (Vercel)

Fully static site — no adapter needed. Vercel auto-detects Astro; `vercel.json`
adds security headers + long-cache for hashed assets.

1. **Set your domain:** edit `SITE` at the top of `astro.config.mjs` to your
   production URL (no trailing slash). That one value drives canonical links,
   OG/Twitter image URLs, JSON-LD, `robots.txt`, and the sitemap.
2. **Deploy** either way:
   - **Git:** push to GitHub/GitLab/Bitbucket → Vercel → "Add New Project" → import.
   - **CLI:** `npx vercel` (preview) then `npx vercel --prod` (production).
3. Add your custom domain in Vercel's dashboard, confirm `SITE` matches it, and
   redeploy so the meta/sitemap URLs are correct.

Build command: `npm run build` (`astro check && astro build`) → `dist/`. Node 22
(pinned via `engines`).

## ⚠️ Review before going live — placeholder content

Some copy/data is anonymized or fabricated and must be confirmed before launch:

- **`src/content/projects.json`** — names like "Tenantly" and figures like
  "~4,000 downloads" / "20-plus pages" are placeholders.
- **`src/components/Experience.astro`** — the timeline year ranges/roles are
  anonymized scaffolding.
- **`src/components/HeroTerminal.astro`** — the terminal lines.
- Confirm the **email** (`src/components/Contact.astro`) and **GitHub** link.
