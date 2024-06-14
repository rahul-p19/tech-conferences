/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0px 120px 0px gray',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

