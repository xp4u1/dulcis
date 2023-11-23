const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extends: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  variants: {},
  plugins: [],
};
