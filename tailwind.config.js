// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        21: '5.25rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
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
      maxWidth: {
        '8xl': '85rem',
        '9xl': '90rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled', 'active', 'checked'],
      borderRadius: ['disabled', 'active', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
