import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const base = process.env.VITE_BASE || '/Taller-2-refuerzo/'

export default defineConfig({
  plugins: [react()],
  base: '/Taller-2-refuerzo/'
})