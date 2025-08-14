import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  base: '/harshitpande001-2023-portfolio.github.io/' // <-- Add this line
})
