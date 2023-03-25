/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      padding: {
        '30': '30px',
        '60': '60px',
        '100': '100px',
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")],
}
