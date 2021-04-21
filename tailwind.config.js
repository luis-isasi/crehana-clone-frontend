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
        98: '27rem',
        100: '30rem',
        '8xl': '85rem',
        '9xl': '90rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '2/4': '50%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('height'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        primary: {
          primary: '#181B32',
          lighter: '#9c86f9',
          light: '#6f4ef6',
          main: '#4b22f4',
          dark: '#3417aa',
        },
        secondary: {
          lighter: '#D2FAF6',
          light: '#49F2D2',
          main: '#0BD4C1',
          dark: '#0B756F',
        },
      },
      borderRadius: {
        circle: '50%',
      },
    },
  },
  variants: {
    extend: {
      objectFit: ['hover', 'focus'],
      objectPosition: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],
      width: ['hover', 'focus'],
      fontSize: ['hover', 'focus'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled', 'active', 'checked'],
      borderRadius: ['disabled', 'active', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
