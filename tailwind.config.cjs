/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Cormorant Upright", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: "#0c0c0c",
        primary: "#dcca87",
        "primary-light": "#f5efdb",
        "gray-light": "#aaaaaa",
        "gray-dark": "#545454",
      },
    },
  },
  plugins: [],
};
