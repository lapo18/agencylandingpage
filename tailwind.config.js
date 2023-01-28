/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5678',
        secondary: '#020E35',
      },
    },

    fontFamily: {
      sans: 'Merriweather',
    },
  },
  plugins: [],
}
