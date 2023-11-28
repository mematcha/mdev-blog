import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { DeviceContext, DeviceProvider } from "./DeviceContext";
import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
import UserPage from "./pages/userPage";

import CreateBlog from "./pages/createBlog";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import AboutMe from "./pages/AboutMe";
// import socialCard from './components/'

function App() {
  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);

  const deviceType = useContext(DeviceContext);

  return (
    <div className="App">
      <DeviceProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/page" element={<BlogPage />} />
            <Route path="/user" element={<UserPage></UserPage>}></Route>
            <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
            <Route
              path="/create-blog"
              element={<CreateBlog></CreateBlog>}
            ></Route>
          </Routes>
        </ThemeProvider>
      </DeviceProvider>
    </div>
  );
}

export default App;
