import { ViteSSG } from 'vite-ssg'
import '@fortawesome/fontawesome-free/css/all.min.css'
// Fonts are served from dizid.com itself (same Inter + JetBrains Mono weights the site
// used from Google Fonts): no third-party stylesheet blocking the first paint.
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './assets/styles/main.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { trackVisits } from './services/visits.js'
import { reloadOnStaleChunks } from './services/staleChunkReload.js'

// Hydrate (reuse the prerendered HTML) instead of vite-ssg's default of throwing it away
// and rendering every page a second time in the browser. Only when this HTML was
// prerendered for this exact path: Netlify's SPA fallback serves the home HTML for paths
// that weren't prerendered, and those must render fresh. vite.config.js stamps the route.
function shouldHydrate() {
  if (typeof document === 'undefined') return false
  const renderedFor = document.getElementById('app')?.dataset.ssgRoute
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return renderedFor === path
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    if (isClient) {
      // Cookie-less page-view counting, in the browser only (not during prerender).
      trackVisits(router)
      // Pages still open from before a deploy: reload instead of a dead link.
      reloadOnStaleChunks(router)
    }
  },
  { hydration: shouldHydrate() },
)
