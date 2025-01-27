import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    plugin(({ addComponents }) => {
      addComponents({
        ".page": {
          flex: "1",
          display: "flex",
          "flex-flow": "column",
          "align-items": "center",
          padding: "0.5rem",
          gap: "0.5rem",
          width: "100%",
          "max-width": "80ch",
          margin: "0 auto",
          position: "relative",
          "z-index": -10,
        },
        ".page-title": {
          "font-size": "1.5rem",
          "font-weight": "bold",
        },
        ".page-paragraph": {
          "align-self": "stretch",
        },
        ".page-center": {
          flex: "0",
        },
      });
    }),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
