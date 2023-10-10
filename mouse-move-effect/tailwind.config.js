/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./**/*.{html,ts,php}",
  ],
  theme: {
    screens: {
      xxsm: '480px',
      xsm: '576px',
      sm: '640px',
      md: '768px',
      xmd: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1598px',
      '4xl': '1920px',
    },
    colors: {
      black: 'black',
      white: 'white',
    },
    extend: {
    },
    container: {
      center: true,
    },
    fontFamily: {
      // 'inter-bold': ['Inter SemiBold'],
    },
    fontSize: {
      xs: ['0.875rem', '1.09375rem'],
      sm: ['1rem', '1.5rem'],
      md: ['1.125rem', '1.40625rem'],
      lg: ['1.25rem', '1.875rem'],
      xl: ['1.375rem', '1.71875rem'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1.5': '1.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}

