/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        myFont: ["Inter"],
      },
      colors: {
        secondary: "#EAB308",
        serviceBg: "#F8F0CD",
        serviceText: "#FF8A00",
        footerBg: "#201D53",
        teamBg: "#B9B4B0",
        white: "#ffffff",
        primary: "#0D00FF",
        noir: "#111827",
      },
    },
  },
  plugins: [],
};
