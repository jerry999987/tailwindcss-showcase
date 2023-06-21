/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '50': '.50',
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
}

