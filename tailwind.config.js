/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
