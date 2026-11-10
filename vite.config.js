import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    // Never inline font files as data: URLs (Vite inlines files under 4 KB by default):
    // the CSP's font-src doesn't allow data:, so the browser blocked those small
    // @fontsource subsets and logged errors. Fonts stay separate files on dizid.com.
    assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf)$/.test(filePath) ? false : undefined),
  },
  ssgOptions: {
    // Stamp each prerendered page with its route; src/main.js only hydrates when it
    // matches the URL (the SPA fallback serves the home HTML for other paths).
    onPageRendered(route, renderedHTML) {
      return renderedHTML.replace(
        '<div id="app" data-server-rendered="true">',
        `<div id="app" data-server-rendered="true" data-ssg-route="${route.replace(/"/g, '&quot;')}">`,
      )
    },
  },
})
