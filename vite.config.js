import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
       VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'pinterest',
        short_name: 'pinterest',
        description: 'My awesome Vite + React PWA!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'LOGO.jpg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'LOGO.jpg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
   server: {
    host: '0.0.0.0'
  }
})
