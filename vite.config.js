import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'

// GitHub Pages serves 404.html for any path it doesn't find as a real file.
// Since this is a client-side-routed SPA, we make 404.html a copy of index.html
// so deep links / refreshes (e.g. /projects) boot the app instead of 404ing.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), spaFallback()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui':     ['lucide-react', 'react-type-animation', 'react-countup', 'react-intersection-observer'],
        },
      },
    },
  },
})
