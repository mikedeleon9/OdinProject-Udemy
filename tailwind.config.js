/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Fraunces" : ["Fraunces", "sans-serif"]
      },
      colors: {
        "mint-green" : "#9fd3c7"
      }
    },
  },
  plugins: [],
}