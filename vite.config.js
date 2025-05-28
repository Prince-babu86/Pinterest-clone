import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 // ✅ just import like this
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Pinterest Clone',
        short_name: 'Pinterest',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        description: 'My awesome Vite + React PWA!',
        icons: [
          {
            src: '/KK.jpg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/KK.jpg',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/KK.jpg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
})
