import React from "react";

export const themes = {
  light: {
    heading: "#000",
    text: "#A4A6AA",
    btnBgWelcome: "#C3CBD8",
    btnTextWelcome: "#fff",
  },
  dark: {
    heading: "#fff",
    text: "#A4A6AA",
    btnBgWelcome: "#2C2C2C",
    btnTextWelcome: "#fff",
  },
};

export const ThemeContext = React.createContext(themes.light);
