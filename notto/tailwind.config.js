/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '375px',
        'lg': '425px',
      }
    },
  },
  plugins: [],
}