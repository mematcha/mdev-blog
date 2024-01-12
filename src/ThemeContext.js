import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
  
    const setNewTheme=(theme)=> {
      if(theme=="dark"){
        setTheme("dark");
      }
      else if(theme=="light"){
        setTheme("light");
      }
      else{
        setTheme("light");
      }
    }
    
    useEffect(()=>{
      const themeValue = localStorage.getItem('theme');
      setNewTheme(themeValue);
    },[]);


    return (
      <ThemeContext.Provider value={{theme,setNewTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };