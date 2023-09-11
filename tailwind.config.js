/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      scale: {
        25: "0.25",
        40: "0.4",
      },
    },
  },
  plugins: [],
};
