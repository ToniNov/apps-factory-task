/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E2E8F0',
          DEFAULT: '#718096',
          dark: '#2D3748',
        },
        secondary: {
          light: '#eceff2',
          DEFAULT: '#E53E3E',
          dark: '#292e37',
        },
      },
    },
  },
  plugins: [],
};
