export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  darkbg: string;
};

export type ThemeFontFamily = {
  sans: string[];
  serif: string[];
};

export type ThemeBorderRadius = {
  DEFAULT: string;
  lg: string;
};

export type ThemeType = {
  colors: ThemeColors;
  fontFamily: ThemeFontFamily;
  borderRadius: ThemeBorderRadius;
};
