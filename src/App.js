import React, { useContext, useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { DeviceContext, DeviceProvider } from "./DeviceContext";


import CreateBlog from "./pages/createBlog";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import CarouselGeneral from "./components/Carousel/Carousel";
import CarouselTemplate from "./components/Carousel/CarouselTemplate";
import MainPage from "./MainPage";
import { jwtDecode } from "jwt-decode";
import {blogCookieExists, generateRefreshToken, generateAccessToken, getRoleAssigned} from "../src/auth/authenticator";
// import socialCard from './components/'

function App() {
  const runAuthentication = ()=>{
    const cookieChecker = blogCookieExists();
    if(!cookieChecker.state){
      generateRefreshToken();
    }
    else{
      const accessToken=localStorage.getItem('accessToken');
      //generate access token if it is empty, null or undefined
      if(accessToken=='' || accessToken==null || accessToken==undefined){
        generateAccessToken(cookieChecker.cookie);
      }
      else{
        generateAccessToken(cookieChecker.cookie,accessToken);
      }

    }
  };
  useEffect(() => {
    document.title = "Sathwik Matcha | Home";
    runAuthentication();
  }, []);
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or other sources
    const theme=localStorage.getItem('theme');
    return theme || 'light';
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
