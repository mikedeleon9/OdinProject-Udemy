/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "sans-serif"]
      },
      letterSpacing: {
        evenWider: "0.2em",
      },
      fontSize: {
        '5.5xl' : '3.5rem'
      }
    },
  },
  plugins: [],
}

