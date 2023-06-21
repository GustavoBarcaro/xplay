import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bcxBlue: "#344E94",
    bcxGreen: "#79BA4E",
    white: "#FFFFFF",
    black: "#000000"
  },
  fonts: ["Inter", "sans-serif"],
  fontSizes: {
    small: "11px",
    medium: "14px",
    big: "16px",
    large: "21px",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;