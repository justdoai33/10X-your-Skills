# RedX Teaser Site

A teaser site for RedX, a 12-week Agentic AI programme. Built with Next.js, TypeScript, and Tailwind CSS.

## Install

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build (Static Export)

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## Preview Production Build

To serve the production build locally:

```bash
npx serve out
```

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - React components (Header, Footer)
- `/data` - Content data files (content.ts)
- `/out` - Static build output (generated)
- `DESIGN.md` - Visual direction and design constraints
- `ASSUMPTIONS.md` - Decisions made where spec was unclear

## Design Direction

Technical brutalist: monospace throughout (IBM Plex Mono), high-contrast black/white/red only, zero border radius, deliberately unpolished aesthetic. See `DESIGN.md` for full rationale.

## Accessibility

- WCAG 2.2 AA compliant
- Fully keyboard navigable
- Semantic HTML with ARIA labels
- Visible focus indicators
- 4.5:1 minimum contrast for text
- Respects prefers-reduced-motion
- Form validation with inline errors

## Requirements Met

All acceptance criteria from section 9 of the requirements spec:

- ✓ All sections present with required content
- ✓ Two "Apply now" CTAs
- ✓ Four role cards with scenarios
- ✓ Form with all 9 fields and validation
- ✓ Keyboard-operable ranking control
- ✓ Submission confirmation
- ✓ Error recovery with preserved data
- ✓ Form state persistence
- ✓ Correct metadata
- ✓ Clean header/footer
- ✓ DESIGN.md with constraints
- ✓ Fully keyboard accessible
- ✓ Responsive 360px-1920px
- ✓ Copy in data files
- ✓ Centralized design tokens
- ✓ No fabricated content
- ✓ Clean build
- ✓ Node + npm only
- ✓ No backend/database/API
- ✓ Works offline

## Tech Stack

- Next.js 16 (Static Export)
- React 19
- TypeScript 5
- Tailwind CSS 4
- IBM Plex Mono (Google Fonts)

## License

Built as a specification implementation exercise.
