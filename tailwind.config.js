/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "14":"14px"
      },
      zIndex:{
        "5":5
      },
      backgroundColor:{
        "darkTheme":"#1e1e1e"
      },
      textColor:{
        "darkTheme":"#eee"
      }
    },
  },
  plugins: [],
}