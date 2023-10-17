import React, { useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MainHeader from "./components/mainHeader";
import Footer from "./components/footer";
import MainSearch from "./components/mainSearch";
import BlogCardNew from "./components/blogCard2";
import {DeviceContext, DeviceProvider} from "./DeviceContext";
import MLCard from "./components/mailingListCard";
import HomePage from "./pages/homePage";
// import socialCard from './components/'

function App() {


  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);

  const deviceType = useContext(DeviceContext);

  return (
    <div className="App">
      <DeviceProvider>
        <HomePage deviceType={deviceType}></HomePage>
      </DeviceProvider>
    </div>
  );
}

export default App;
