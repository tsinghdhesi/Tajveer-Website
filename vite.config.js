import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const buildDate = new Date().toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
})

export default defineConfig({
  base: '/Tajveer-Website/',
  plugins: [react()],
  define: {
    __LAST_UPDATED__: JSON.stringify(buildDate),
  },
})
