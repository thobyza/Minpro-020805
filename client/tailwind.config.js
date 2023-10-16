/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{jsx, js}",
    "./src/pages/**/*.{jsx, js}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        "accent-green-1": '#4ECCA3',
        "accent-grey-1": '#393E46'
      }
    },
  },

  daisyui: {
    themes: ["light"],
  },

  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}

