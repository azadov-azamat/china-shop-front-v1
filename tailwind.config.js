/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blurple": "#6342E7",
        "primary-red": "#D8153A",
        "primary-gray": "#A1A1A1"
      }
    },
  },
  plugins: [],
}