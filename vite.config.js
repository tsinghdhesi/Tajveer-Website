import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set 'base' to match your GitHub repo name exactly.
// Repo: github.com/tsinghdhesi/Tajveer-Website → base: '/Tajveer-Website/'
export default defineConfig({
  plugins: [react()],
  base: '/Tajveer-Website/',
})
