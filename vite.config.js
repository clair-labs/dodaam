import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from GitHub Pages under /dodaam/, so assets and routes are prefixed
// with this base. Dev keeps the default '/'.
export default defineConfig({
  base: '/dodaam/',
  plugins: [react()],
})
