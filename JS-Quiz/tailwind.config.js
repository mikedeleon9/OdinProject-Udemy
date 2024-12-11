/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",  // Look in the root directory for HTML files
    "./src/**/*.{html,js}"  // Keep the existing path for src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

