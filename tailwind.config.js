/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,erb,md,liquid}",
    "./src/*.{html,erb,md,liquid}",
    "./frontend/styles/index.css'"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          "Helvetica", "Arial", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

