import { theme as customTheme } from "./src/styles/theme";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: customTheme.colors,
      fontFamily: customTheme.fontFamily,
      borderRadius: customTheme.borderRadius,
    },
  },
  plugins: [],
};
