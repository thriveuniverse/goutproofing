// vite.config.ts   ← FINAL WORKING VERSION FOR TAILWIND V4
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← THIS IS THE CORRECT ONE

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),        // ← now it works
  ],
  base: '/',              // ← fixes blank page on Netlify
})