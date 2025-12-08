import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← The new magic

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← Tailwind CSS v4 plugin
  ],
})