// tailwind.config.js
const {heroui} = require("@heroui/theme");
// import "./node_modules/@heroui/theme/dist/components/button.mjs"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // single component styles
    "./node_modules/@heroui/theme/dist/components/button.mjs",
    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};