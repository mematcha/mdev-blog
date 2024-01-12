import React, { useContext, useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { DeviceContext, DeviceProvider } from "./DeviceContext";


import CreateBlog from "./pages/createBlog";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import CarouselGeneral from "./components/Carousel/Carousel";
import CarouselTemplate from "./components/Carousel/CarouselTemplate";
import MainPage from "./MainPage";
// import socialCard from './components/'

function App() {
  
  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or other sources
    return localStorage.getItem('theme') || 'light';
  });
  return (
    <div className={`App`} theme={theme}>
      <DeviceProvider>
        <ThemeProvider>
          <MainPage></MainPage>
        </ThemeProvider>
      </DeviceProvider>
    </div>
  );
}

export default App;
