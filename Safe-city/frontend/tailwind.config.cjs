// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Temporarily ONLY include files in the root of src/ 
  // where you know classes are used. This confirms file scanning works.
  content: [
    "index.html",
    "src/*.{js,jsx}", // Targets files in src/ like App.jsx, index.jsx
    "src/pages/**/*.{js,jsx}", // Targets all files in the pages folder
    "src/components/**/*.{js,jsx}", // Targets all files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}