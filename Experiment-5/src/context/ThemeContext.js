import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh"
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};