/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundDisney: "url('https://wallpaperaccess.com/full/5939553.jpg')"
      },
      fontFamily: {
        fontePadrao:  "Poppins, sans-serif"
      }
    },
    screens: {
      'tablet': '640px',
      '770px': '770px',
      '414px': '414px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}