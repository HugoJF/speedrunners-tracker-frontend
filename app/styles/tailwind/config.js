// eslint-disable
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs', './app/**/*.js', './app/*.js', './app/*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
};
