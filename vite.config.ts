import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: { // 👈 Add the resolve configuration
    alias: {
      // Map the '@/...' alias to the actual path 'path.resolve(__dirname, './src')'
      "@": path.resolve(__dirname, "./src"), 
    },
  },
})
