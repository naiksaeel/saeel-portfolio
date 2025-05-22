import { ThemeType } from "@/types/themeTypes";

export const theme: ThemeType = {
  colors: {
    primary: "#1F2235", // Deep navy background
    secondary: "#FFC12D", // Yellow-orange accent
    accent: "#FFFFFF", // White text or highlight
    background: "#111321", // Slightly darker navy for sections
    foreground: "#CCCCCC", // Muted text color
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    serif: ["Georgia", "serif"],
  },
  borderRadius: {
    DEFAULT: "0.5rem",
    lg: "1rem",
  },
};
