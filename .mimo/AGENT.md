# Saintnuit Portfolio

## Project
Premium dark luxury portfolio website for Saintnuit (Creative Director / AI Filmmaker / Musician / Art Director).

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Design System
- **Typography:** Cormorant Garamond (serif) for headings, Geist Mono for body
- **Colors:** Deep OLED black (#050505), gold accent (#c9a96e), muted (#5a5a5a)
- **Effects:** Film grain overlay, double-bezel cards, spring physics animations
- **References:** The Row, Saint Laurent, Acne Studios, A24, 032c, contemporary art galleries

## Pages
- `/` — Homepage (parallax hero, asymmetric bento grid, editorial split, CTA)
- `/about` — Bio with parallax portrait, philosophy, services, timeline
- `/portfolio` — Filterable masonry grid with double-bezel cards
- `/portfolio/[slug]` — Project detail with parallax image, editorial layout
- `/journal` — Filterable essays with pill filters
- `/contact` — Contact form + social links, editorial grid
- `/not-found` — Custom 404

## Components
- `Navigation.tsx` — Floating glass pill nav with staggered mobile overlay
- `Footer.tsx` — Minimal footer with link underline effects
- `PageTransition.tsx` — Framer Motion wrappers with spring physics
- `LoadingScreen.tsx` — Cinematic loading with text reveal

## Design Features
- Film grain texture overlay (SVG noise)
- Double-bezel (nested) card architecture
- Floating glass pill navigation
- Magnetic button hovers with trailing icons
- Parallax scroll effects on images
- Asymmetric bento grid layouts
- Spring physics animations (cubic-bezier 0.32, 0.72, 0, 1)
- Eyebrow pill tags for section labels
- Link underline hover effects
- Massive whitespace (py-24 to py-40 sections)

## Data
- 6 projects in `src/lib/data.ts`
- 5 journal entries in `src/lib/data.ts`
- Categories for filtering
- Services array

## SEO
- JSON-LD structured data (Person schema)
- Open Graph + Twitter cards
- Semantic HTML with ARIA labels
- Proper heading hierarchy

## Accessibility
- Focus-visible styles
- Reduced motion support
- ARIA labels on interactive elements
- Proper form labels
- Keyboard navigation

## Commands
```bash
npm run dev     # → http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```
