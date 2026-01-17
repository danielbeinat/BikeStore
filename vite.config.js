import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar librerías pesadas en chunks
          'framer-motion': ['framer-motion'],
          'swiper': ['swiper'],
          'ui-libs': ['@headlessui/react', 'lucide-react'],
          'form-libs': ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    // Optimizar chunk size
    chunkSizeWarningLimit: 600,
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@ionic/react', 'flowbite', 'flowbite-react', '@material-tailwind/react']
  },
})
