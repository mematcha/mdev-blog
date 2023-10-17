import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
  
    function setNewTheme(theme) {
      if(theme=="dark"){
        setTheme("dark");
      }
      else if(theme=="dim"){
        setTheme("dim");
      }
      else if(theme=="light"){
        setTheme("light");
      }
      else{
        setTheme("light");
      }
    }
  
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };