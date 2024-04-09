/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        border: '#eee',
        input: '#00adb5',
        ring: '#00adb5',
        background: '#222831',
        foreground: '#eee',
        primary: {
          DEFAULT: '#00adb5',
          foreground: '#000',
        },
        secondary: {
          DEFAULT: '#393e46',
          foreground: '#eee',
        },
        destructive: {
          DEFAULT: '#ff2e63',
          foreground: '#eee',
        },
        muted: {
          DEFAULT: '#393e46',
          foreground: '#eee',
        },
        accent: {
          DEFAULT: '#00adb5',
          foreground: '#eee',
        },
        popover: {
          DEFAULT: '#393e46',
          foreground: '#eee',
        },
        card: {
          DEFAULT: '#393e46',
          foreground: '#eee',
        },
      },
      borderRadius: {
        lg: '8px',
        md: '4px',
        sm: '2px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
