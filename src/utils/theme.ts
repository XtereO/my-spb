import React from "react";

export const themes = {
  light: {
    heading: "#000",
    text: "#A4A6AA"
  },
  dark: {
    heading: "#fff",
    text: "#fff"
  },
};

export const ThemeContext = React.createContext(themes.light);
