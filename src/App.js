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
import CarouselGeneral from "./components/Carousel/Carousel";
import CarouselTemplate from "./components/Carousel/CarouselTemplate";
// import socialCard from './components/'

function App() {
  useEffect(() => {
    document.title = "Blog | mDev";
  }, []);

  const deviceType = useContext(DeviceContext);

  const resumeObj=[
    { title: "Programming Languages", courses: ["Javascript", "Typescript", "Java", "Python", "R", "C++"] },
    { title: "Web Technologies", courses: ["Angular", "React TS", "Node.js", "Express.js", "Responsive Design", "Progressive Web Apps (PWA)"] },
    { title: "Databases", courses: ["MySQL", "Microsoft SQL Server"] },
    { title: "Frameworks Libraries", courses: ["Swing", ".NET MVC", "Lucene", "Tailwind CSS", "Chart JS", "React-ag-grid", "Angular Material"] },
    { title: "Version Control", courses: ["Azure DevOps", "Git", "GitHub"] }
  ];

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
            <Route path="/carousel-general" 
                element={
                <CarouselGeneral 
                    element={<CarouselTemplate></CarouselTemplate>}
                    data={resumeObj}
                    settings={{
                      showDots:true,
                      showArrows:true
                      }}>

                </CarouselGeneral>}
                >
                
            </Route>
          </Routes>
        </ThemeProvider>
      </DeviceProvider>
    </div>
  );
}

export default App;
