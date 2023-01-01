module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Inter"],
      },
      colors: {
        secondary: "#EAB308",
        white: "#ffffff",
        primary: "#1D4ED8",
        noir: "#111827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
