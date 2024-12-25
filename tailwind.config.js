/** @type {import('tailwindcss').Config} */
import { colors as defaultColors } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./public/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        roboto: ['Roboto Slab', 'serif'],
      },
      colors: {
        'custom-blue': '#0290ff',
        'custom-dark-blue': '#4386bf',
      },
    },
  },
  plugins: [],
};
