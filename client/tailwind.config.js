/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{jsx,js}",
    "./src/pages/**/*.{jsx,js}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('../src/assets/bg-pattern.jpg')",
        "bg-event":
          "url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)",
      },
      colors: {
        "accent-green-1": "#4ECCA3",
        "accent-grey-1": "#393E46",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}

