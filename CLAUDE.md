# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Architecture

This is a Vue 3 portfolio website for Marc de Ruijter, built with Vite, prerendered via `vite-ssg`, and deployed on Netlify.

### Tech Stack
- **Vue 3** with Composition API (`<script setup>` syntax)
- **Vite 7** for build tooling
- **vite-ssg** for static prerendering — `npm run build` runs `vite-ssg build`, which renders each route to real static HTML (`dist/index.html`, `dist/projects.html`, `dist/hire.html`, `dist/hire/mvp-development.html`, `dist/what-is-dizid.html`) so crawlers that don't execute JS still see real content. Client-side hydration/SPA nav still works after load.
- **@unhead/vue** (via vite-ssg) for per-route `<title>`/meta/canonical/OG tags and JSON-LD, set via `useHead()` in `src/App.vue` (sitewide Organization schema) and each `src/views/*.vue` (per-route tags + BreadcrumbList via `src/composables/useBreadcrumbSchema.js`)
- **CSS Variables** for theming (dark theme)
- **Font Awesome** for icons — self-hosted via `@fortawesome/fontawesome-free`, imported in `src/main.js` (not CDN). Only `fa-solid` and `fa-brands` styles are used.

### Component Structure
`src/App.vue` is the root — `NavBar` + `<router-view>` + `FooterSection` on every route. `src/router/index.js` defines routes: `/` (`HomeView.vue`, composes HeroSection/AboutSection/WhoShouldUseSection/ProjectsSection/SkillsSection/ContactSection), `/projects`, `/hire`, `/hire/mvp-development`, `/what-is-dizid`. `WhoShouldUseSection` and `FaqSection` (schema-backed, prop-driven) are reused across views.

### Styling System
- `src/assets/styles/variables.css` - CSS custom properties (colors, spacing, typography, shadows)
- `src/assets/styles/main.css` - Global styles and utility classes
- Components use scoped styles with CSS variables from the design system
- Utility classes available: `.container`, `.section`, `.btn`, `.card`, `.tag`, `.grid-2`, `.grid-3`, `.text-gradient`, margin/gap utilities

### Conventions
- Components use Vue 3 `<script setup>` with `defineProps()` for type-safe props
- Colors: `--color-accent` (indigo #6366f1), `--color-secondary` (emerald #10b981)
- Transitions use `--transition-fast/base/slow` variables
- Responsive breakpoints: 768px (mobile), 1024px (tablet)

## Preferences

- Act like a senior developer
- Write complete, working code - no mocks, stubs, or TODOs
- Use clear comments in code
- Keep existing working code intact when adding features
- Modular, maintainable structure

## Code Style

- Prefer simple solutions over clever ones
- Use descriptive variable names
- Keep functions small and focused

## Communication

- Be concise and direct
- Explain trade-offs when relevant
- Ask clarifying questions before making large changes

## Deployment

- **Netlify project:** pensive-franklin-206069 (ID: `67de6a8a-2b1e-4daa-a744-675b7538ed7d`)
- **Production domain:** https://dizid.com
- **GitHub repo:** github.com/dizid/dizid2023 (branch `main`)
- Netlify builds via `npm run build` → publishes `dist/`, auto-deploys on push to `main`
- Contact form + `/hire` form use Netlify Forms — see the hidden static `<form>` blocks in `index.html` (required because Netlify's form-detection crawler doesn't see Vue-rendered forms). Any new form needs a matching hidden form block.
