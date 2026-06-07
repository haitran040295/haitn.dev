# Project Rules — Personal Landing Page

## Stack
- Astro + Tailwind v4 + TypeScript (strict)
- Zero JS by default; only `client:*` on actually interactive components
- Mobile-first responsive
- Dark theme default, light via [data-theme="light"]

## Design System (NON-NEGOTIABLE)
- Use ONLY the tokens defined in tailwind.config.ts and global.css.
- NEVER use arbitrary Tailwind values: `p-[40px]`, `text-[17px]`, `bg-[#abc]` are banned. If a value isn't in the scale, extend the scale instead.
- Colors: use semantic utility classes (`.bg-canvas`, `.text-primary`, `.border-subtle`) — never raw hex.
- Spacing: only the defined scale. If you need something between 32 and 48, you don't — pick one.
- Typography: only the named text classes. No inline font-size.

## HTML Quality
- Semantic landmarks: <header>, <nav>, <main>, <section aria-labelledby="…">, <footer>
- One <h1> per page (hero). Then h2 per section, h3 for cards.
- All images: real alt text. Decorative: alt="".
- Links: descriptive text, no "click here".

## Accessibility
- WCAG AA contrast minimum
- Focus rings always visible
- prefers-reduced-motion respected
- Skip-to-content link in BaseLayout

## Performance
- No client-side JS unless required (theme toggle, mobile nav)
- Astro <Image> for all imagery
- Hero font preloaded
- Production build target: <50KB compressed total

## SEO
- BaseLayout takes title, description, ogImage props
- OG + Twitter card tags
- JSON-LD Person schema on index
- Sitemap + robots

## When generating code
- One section per request. Don't batch.
- Match the design brief. Ask if ambiguous.
- After generating, screenshot via Playwright at 1440 / 768 / 393 and self-critique.
- Keep components small. No giant files.
- Real content from /src/content/projects.json — never lorem ipsum.

## Design judgment
- This is a portfolio for a senior fullstack engineer. Bias toward: confident typography, generous whitespace, restraint, calm motion. Avoid: gradients everywhere, glass morphism, decorative shapes, multiple accent colors, marketing-template vibe.
