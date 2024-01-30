/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
        },
        "nav-gradient-from": "#c0069b",
        "nav-gradient-to": "#ff8733",
        "nav-text": "#FFFFFF",
        "bg-nav-hover": "#BF9F62",
        "bg-news": "#FFE8E0",
        "bg-news-header": "#D73476",
        "bg-appeal": "#F8E6A7",
        "bg-appeal-header": "#BF9F62",
        "btn-sec": "#f37e20",
        "btn-from": "#c0069b ",
        "btn-to": "#ff8733 ",
        heading: "#000000",
        "foo-left": "#8f014f ",
        "foo-right": "#ff7312 ",
        "bg-odd": "#fcaf7f",
      },
      screens: {
        "header-sm": "640px",

        "header-md": "769px",

        "header-lg": "772px",

        "header-xl": "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
