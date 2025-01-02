import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'development' ? '/' : '/dist/',
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  build: {
    minify: 'esbuild',
    sourcemap: true,
  },
})