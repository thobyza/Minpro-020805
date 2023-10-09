/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{jsx,js}", "./src/pages/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('../src/assets/bg-pattern.jpg')",
      },
    },
  },
  plugins: [],
};
