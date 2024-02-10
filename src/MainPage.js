import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
import UserPage from "./pages/userPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import CarouselGeneral from "./components/Carousel/Carousel";
import CreateBlog from "./pages/createBlog";
import AboutMe from "./pages/AboutMe";
import LoginPage from "./pages/loginPage";
import OtherProjects from "./pages/OtherProjects";
import SeriesPage from "./pages/seriesPage";
import SeriesBlogsPage from "./pages/seriesBlogsPage";
import Error404Page from "./pages/error404Page";
import { getRoleAssigned } from "./auth/authenticator";
import { useContext, useEffect } from "react";
import { DeviceContext } from "./DeviceContext";
import API from "./apis/apiCatalog";

function MainPage() {
  const {deviceType, role}=useContext(DeviceContext);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage></HomePage>}></Route>
      {/* <Route exact path="/user" element={<UserPage></UserPage>}></Route> */}
      <Route exact path="/my-projects" element={<OtherProjects></OtherProjects>}></Route>
      <Route exact path="/about-me" element={<AboutMe></AboutMe>}></Route>
      <Route exact path="/series" element={<SeriesPage></SeriesPage>}></Route>
      <Route exact path="/series/:series" element={<SeriesBlogsPage></SeriesBlogsPage>}></Route>
      <Route exact path="/blog/:id" element={<BlogPage></BlogPage>}></Route>
      <Route exact path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
      <Route exact path="/login-beta" element={<LoginPage></LoginPage>}></Route>
      <Route path="*" element={<Error404Page></Error404Page>}></Route>
    </Routes>
  );
}
export default MainPage;
