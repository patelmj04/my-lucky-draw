/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all JSX/TSX files
    "./public/index.html",        // Include your HTML template (if any)
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [],
}
