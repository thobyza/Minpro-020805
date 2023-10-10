/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/components/**/*.{jsx,js}", "./src/pages/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('../src/assets/bg-pattern.jpg')",
      },
      colors: {
        "accent-green-1": '#4ECCA3',
        "accent-grey-1": '#393E46'
      }
    },
  },
  plugins: [],
};
