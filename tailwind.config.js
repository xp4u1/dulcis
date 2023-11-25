const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extends: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
