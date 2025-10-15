/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#E8F4F8',
          lavender: '#F0E6FF',
          beige: '#F5F1E8',
          gray: '#F0F0F2',
          dark: '#2D2B3A',
          purple: '#B19CD9',
          mint: '#D4F1E8',
          peach: '#FFE5D9'
        }
      }
    },
  },
  plugins: [],
}