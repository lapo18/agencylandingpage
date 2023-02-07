/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5678',
        secondary: '#020E35',
        tertiary: '#FFEEF6',
      },
    },
    fontFamily: {
      sans: 'Merriweather',
    },
  },
  plugins: [],
}
