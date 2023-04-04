/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "bright-blue": "#0096FF",
        "bright-orange": "#FF5F1F",
      },
      fontFamily: {
        "michroma": ['Michroma', 'sans-serif']
      }
    },
  },
  plugins: [],
}

