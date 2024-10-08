/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./views/**/*.handlebars"],
  theme: {
    extend: {
      colors : {
        'champagne' : "#F5E6CA",
        'champagne-light': "#B6B996",
        'delft-blue': "#343F56",
        'delft-blue-light': "#84989B",
        'redwood': "#B0413E",
        'viridian': "#668F80",
        'periwinkle': "#A7ACD9"
      },
      fontFamily : {
        'primary': ['Rubik', ...defaultTheme.fontFamily.sans],
        'body': ['"Noto Sans"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

