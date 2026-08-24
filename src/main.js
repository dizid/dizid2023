import { ViteSSG } from 'vite-ssg'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/main.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(App, { routes, scrollBehavior })
