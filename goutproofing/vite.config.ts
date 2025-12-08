import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← The new magic

export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),   // ← uncomment this ONLY if you chose Option A (v4)
  ],
})