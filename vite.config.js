import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MLYB/',
  server: {
    host: 'localhost',
    port: 5175,
  },
})
