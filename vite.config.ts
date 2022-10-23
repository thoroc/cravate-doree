import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
  ],
  // if you need to specify another host/port
  // server: {
  //   host: '127.0.0.1',
  //   port: 8001
  // }
})