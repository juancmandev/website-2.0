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
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '15': '60px',
      '20': '80px',
      '25': '100px',
      '30': '120px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
