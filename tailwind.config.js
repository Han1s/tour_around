/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./lib/constants");
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // TODO: change custom theme
      colors: {
        primary: "#030014",
      },
    },
  },
  plugins: [],
};
