/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minHeight: {
      "320px": "320",
      "220px": "220",
    },
  },
  plugins: [],
};
