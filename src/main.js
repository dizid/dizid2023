import { ViteSSG } from 'vite-ssg'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/main.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { trackVisits } from './services/visits.js'

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ router, isClient }) => {
  // Cookie-less page-view counting, in the browser only (not during prerender).
  if (isClient) trackVisits(router)
})
