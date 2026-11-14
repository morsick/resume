import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Timeweb Cloud serves this site from the root of its domain.
  // For GitHub Pages, build with VITE_BASE_PATH=/resume/.
  base: process.env.VITE_BASE_PATH || '/',
})
