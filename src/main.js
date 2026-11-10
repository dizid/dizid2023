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

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ router, isClient }) => {
  // Cookie-less page-view counting, in the browser only (not during prerender).
  if (isClient) trackVisits(router)
})
