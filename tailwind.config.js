/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      background: "#0f0f0f",
      primary: "#6366f1",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
},
  plugins: [],
}
