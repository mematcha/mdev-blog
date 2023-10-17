import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.scss";
import MainHeader from "./components/mainHeader";
import Footer from "./components/footer";
import MainSearch from "./components/mainSearch";
import BlogCardNew from "./components/blogCard2";
import {DeviceContext, DeviceProvider} from "./DeviceContext";
import MLCard from "./components/mailingListCard";
import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
// import socialCard from './components/'

function App() {


  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);

  const deviceType = useContext(DeviceContext);

  return (
    <div className="App">
      <DeviceProvider>
        <Routes>
          <Route path="/" element={<HomePage deviceType={deviceType}></HomePage>}></Route>
          <Route path="/page" element={<BlogPage deviceType={deviceType}/>} />
        </Routes>
      </DeviceProvider>
    </div>
  );
}

export default App;
