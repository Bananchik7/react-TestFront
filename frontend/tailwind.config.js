/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      title: ["RubikBold"],
      time: ["BebasNeueThin"],
      name: ["BebasNeueC"],
      all: ["PTRootUI"],
      price: ["PTRootUIBold"],
    },
  },
  plugins: [],
};
