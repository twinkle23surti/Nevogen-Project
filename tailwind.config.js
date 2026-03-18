/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D394B", // main dark background (navbar / footer / sections)
        secondary: "#31AF36", // solar green (buttons / highlights)
        //bg-vilot-50
      },

      fontFamily: {
        sans: ["Raleway", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
      },

      borderRadius: {
        xl2: "1rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};
