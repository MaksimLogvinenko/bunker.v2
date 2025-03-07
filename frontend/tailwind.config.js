module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#CFB169",
      dark: "#0D0D0D",
      darkLight: "#1E1E1E",
      red: "#AF0D0D",
      gray: "#333333",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      great: ["Great Vibes", "sans-serif"],
      miniver: ["Miniver", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
    },
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
  },
  plugins: [],
};
