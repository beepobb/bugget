/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#030014'
      }
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}