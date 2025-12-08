// tailwind.config.js   ← MUST be in the project root (same level as package.json)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5F4",
        emerald: {
          600: "#059669",
          700: "#047857",
        },
      },
    },
  },
  plugins: [],
}