import React, { useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MainHeader from "./components/mainHeader";
import Footer from "./components/footer";
import MainSearch from "./components/mainSearch";
import BlogCardNew from "./components/blogCard2";
import {DeviceContext, DeviceProvider} from "./DeviceContext";
import MLCard from "./components/mailingListCard";
function App() {


  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);


  const deviceType = useContext(DeviceContext);

  return (
    <div className="App">
      <DeviceProvider>
        <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
          <MainHeader></MainHeader>
        </div>
        <div className={`body ${deviceType==="mobile"?"mx-[20%]":"mx-[10%]"}`}>
          <MainSearch></MainSearch>
          <div className="pb-[60px]">
              <BlogCardNew ></BlogCardNew>
              <BlogCardNew ></BlogCardNew>
              <BlogCardNew ></BlogCardNew>
              <BlogCardNew ></BlogCardNew>
              <BlogCardNew ></BlogCardNew>
              <BlogCardNew ></BlogCardNew>
            </div>
        </div>
        <Footer></Footer>
      </DeviceProvider>
    </div>
  );
}

export default App;
