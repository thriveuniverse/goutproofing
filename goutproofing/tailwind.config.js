// tailwind.config.js   ← MUST be in the project root (same level as package.json)
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  './_layouts/**/*.html',
  './_includes/**/*.html',
  './posts/**/*.md',   // or './_posts/**/*.md' if that's your folder
  './*.html',
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
  
}