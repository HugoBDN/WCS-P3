/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
      },
      fontFamily: {
        // sans: ["Roboto", "sans-serif"],
        myfont: ["Poppins", "sans-serif"],
      },
      animationDuration: {
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s,",
        // Ajoutez d'autres durées d'animation au besoin
      },
      width: {
        fullx2: "200%",
        fullx25: "250%",
      },
    },
  },
  plugins: [],
};
