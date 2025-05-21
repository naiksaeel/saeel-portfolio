import { ThemeType } from "@/types/themeTypes";

export const theme: ThemeType = {
  colors: {
    primary: "#166534", // Green-700
    secondary: "#4ADE80", // Green-400
    accent: "#65A30D", // Green-600
    background: "#ECFDF5", // Light Green background
    foreground: "#14532D", // Dark Green text
  },
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
    serif: ["Times New Roman", "serif"],
  },
  borderRadius: {
    DEFAULT: "0.25rem",
    lg: "0.75rem",
  },
};
