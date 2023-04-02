/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: { 
      colors:{
        background : 'var(--background-color)',
        altBackground : 'var(--alt-background-color)',
        text : 'var(--text-color)',
        altText : 'var(--alt-text-color)',
        link : 'var(--link-color)',
        altLink : 'var(--alt-link-color)',
        border : 'var(--border-color)',
        altBorder : 'var(--alt-border-color)',
        button : 'var(--button-color)',
        altButton : 'var(--alt-button-color)',
      },
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
