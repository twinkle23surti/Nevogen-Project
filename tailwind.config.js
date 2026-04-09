/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A3D8C", // Main Brand Blue (SS ke background jaisa deep sky blue)
        secondary: "#00B9E8", // Highlight / Icons / Links / Small headings (bright cyan-blue jaise SS mein icons)
        accent: "#FFCC00", // Solar Yellow (heading, CTA, badge, highlights) — SS ke "SOLAR ENERGY" aur 30% badge jaisa
        dark: "#0B1F4D", // Dark sections, footer, navbar background (deep navy)
        light: "#F5FAFF", // Light section backgrounds, cards (fresh white-blue tint)
        textPrimary: "#0F172A", // Dark text for white/light backgrounds
        textLight: "#FFFFFF", // White text for dark/blue backgrounds
        border: "#E2ECF8", // Subtle borders & dividers
        success: "#10B981", // Optional light green (eco feel, warranty ke liye agar chaho)
      },
      fontFamily: {
        sans: ["Raleway", "system-ui", "sans-serif"],
       // heading: ["Plus Jakarta Sans", "sans-serif"],
         heading: ["Poppins", "sans-serif"], /* 🔥 change */
        body: ["Rubik", "sans-serif"],
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
