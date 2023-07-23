const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: '8px',
        md: `6px`,
        sm: "4px",
      },
    },
  },
  plugins: [
    require('windy-radix-palette'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography')],
}
