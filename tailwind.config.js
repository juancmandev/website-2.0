/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      primary: '#00adb5',
      dark1: '#393e46',
      dark2: '#222831',
      white1: '#eee',
      boxShadow: 'rgba(56,56,56,0.75)',
    },
  },
  plugins: [],
};
