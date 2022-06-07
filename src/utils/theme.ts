import React from "react";

export const themes = {
  light: {
    heading: "#000",
    text: "#A4A6AA",
    btnBgWelcome: "#C3CBD8",
    btnTextWelcome: "#fff",
    cardBg: "#EDEFF2",
    icon: "#3F8AE0",
    btnBg: "#A4A6AA",
    btnText: "#fff",
    horizontalPlaceBg: "#454545",
  },
  dark: {
    heading: "#fff",
    text: "#A4A6AA",
    btnBgWelcome: "#2C2C2C",
    btnTextWelcome: "#fff",
    cardBg: "#333333",
    icon: "#3F8AE0",
    btnBg: "#2C2C2C",
    btnText: "#fff",
    horizontalPlaceBg: "#fff",
  },
};

export const ThemeContext = React.createContext(themes.light);
