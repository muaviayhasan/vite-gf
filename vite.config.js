import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['jquery', 'owl.carousel'],
  },
  resolve: {
    alias: {
      'jquery': 'jquery/dist/jquery.js'
    }
  },
  define: {
    'global': 'window',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'jquery': ['jquery', 'owl.carousel']
        }
      }
    }
  },
})
