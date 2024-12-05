/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Directly reference index.html
    './**/*.html',  // Include nested HTML files
    './**/*.js',    // Include any JS files
  ],
  theme: {
    extend: {
      backgroundImage: {
      'main-background': "url('../images/bg-intro-desktop.svg')",
      'mobile-background': "url('../images/bg-intro-mobile.svg')"
      },
      colors: {
        'lightGray': 'hsl(220, 16%, 96%)',
        'navy': 'hsl(233, 26%, 24%)'
      },
    },
  },
  plugins: [],
};


