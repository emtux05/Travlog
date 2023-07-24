// const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: "Inter",
        "nunito-sans": "'Nunito Sans'",
      },
      colors: {
        white: "#fff",
        gray: {
          "100": "#222831",
          "200": "rgba(25, 24, 37, 0.1)",
          "300": "rgba(25, 24, 37, 0.5)",
          "400": "rgba(25, 24, 37, 0.75)",
        },
        black: "#191825",
        goldenrod: {
          "100": "#facd49",
          "200": "rgba(250, 205, 73, 0.08)",
        },
        slateblue: "#5d50c6",
        hotpink: "#f85e9f",
        orangered: "#ff5722",
        darkslategray: "#393e46",
        whitesmoke: "#eee",
      },
      borderRadius: {
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      lg: "18px",
      "4xl": "23px",
      "5xl": "24px",
      "16xl": "35px",
      "25xl": "44px",
      "9xl": "28px",
      sm: "14px",
    },
  },
  plugins: [],
}
