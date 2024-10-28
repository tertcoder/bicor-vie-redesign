/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoFont: ["Noto Sans", "sans - serif"],
        libreFont: ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#014D30",
        secondary: "#F5CA52",
        // secondary: "#F58424",
        accent: "#FF4C00",
        neutral: "#FFFFFF",
        textGray: "#333333",
        textDark: "#010204",
      },
      screens: {
        xxs: "250px",
        xs: "480px",
        sm: "768px",
        md: "834px",
        lg: "1024px",
        xl: "1440px",
      }
    },
  },
  plugins: [],
};
