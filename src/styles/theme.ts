import { ThemeType } from "@/types/themeTypes";

export const theme: ThemeType = {
  colors: {
    primary: "#1A1C2D", // Deep navy background
    secondary: "#FFC12D", // Yellow-orange accent
    accent: "#FFFFFF", // White text or highlight
    background: "#111321", // Slightly darker navy for sections
    foreground: "#CCCCCC", // Muted text color
    darkbg: "#0E101A", // Dark background
    cardBg: "#191B28",
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
    serif: ["Inter", "serif"],
  },
  borderRadius: {
    DEFAULT: "0.5rem",
    lg: "1rem",
  },
};
