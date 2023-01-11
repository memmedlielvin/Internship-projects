/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        brain: "url('../src/brain1.png')",
      },
    },
  },
  plugins: [],
};
