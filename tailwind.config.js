/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      cambria: ["Cambria", "sans-serif"],
      century: ["Century", "sans-serif"],
      imprint: ["Imprint", "sans-serif"],
      bahnschrift: ["Bahnschrift", "sans-serif"],
      calibri: ["Calibri", "sans-serif"],
    },
  },
  plugins: [],
}