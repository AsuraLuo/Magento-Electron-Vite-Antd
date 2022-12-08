import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    outDir: 'build'
  },
  plugins: [
    react()
  ],
  server: {
    host: 'localhost',
    port: 3000,
    https: false,
    cors: true,
    hmr: true
  }
})
