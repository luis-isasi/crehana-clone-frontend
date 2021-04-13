// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      colors: {
        primary: '#181B32',
      },
      borderRadius: {
        circle: '50%',
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
