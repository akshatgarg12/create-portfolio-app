/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors:{
      background : 'var(--background-color)',
      altBackground : 'var(--alt-background-color)',
      text : 'var(--text-color)',
      primary : 'var(--primary-color)',
      secondary : 'var(--secondary-color)',
      tertiary : 'var(--/tertiary-color)',
    },
    extend: { 
      padding: {
        '30': '30px',
        '60': '60px',
        '100': '100px',
      }
    }
  },
  safelist: [],
  plugins: [require("tw-elements/dist/plugin")],
}
