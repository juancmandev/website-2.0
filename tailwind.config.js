/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      primary: '#00adb5',
      primaryDark: '#06979c',
      primaryLight: '#00bcc7',
      dark1: '#393e46',
      dark2: '#222831',
      white1: '#eee',
      boxShadow: 'rgba(125,125,125,0.9)',
    },
  },
  plugins: [],
};
