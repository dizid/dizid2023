# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Architecture

This is a Vue 3 portfolio website for Marc de Ruijter, built with Vite and deployed on Netlify.

### Tech Stack
- **Vue 3** with Composition API (`<script setup>` syntax)
- **Vite 7** for build tooling
- **CSS Variables** for theming (dark theme)
- **Font Awesome** for icons (loaded via CDN)

### Component Structure
`src/App.vue` is the root component that composes the page from section components:
- NavBar, HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection, FooterSection

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
