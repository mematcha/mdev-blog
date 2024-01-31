import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
import UserPage from "./pages/userPage";
import { Routes, Route } from "react-router-dom";
import CarouselGeneral from "./components/Carousel/Carousel";
import CreateBlog from "./pages/createBlog";
import AboutMe from "./pages/AboutMe";
import LoginPage from "./pages/loginPage";
import OtherProjects from "./pages/OtherProjects";
import SeriesPage from "./pages/seriesPage";
import SeriesBlogsPage from "./pages/seriesBlogsPage";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/page" element={<BlogPage />} />
      <Route path="/user" element={<UserPage></UserPage>}></Route>
      <Route path="/my-projects" element={<OtherProjects></OtherProjects>}></Route>
      <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
      <Route path="/series" element={<SeriesPage></SeriesPage>}></Route>
      <Route path="/series/:series" element={<SeriesBlogsPage></SeriesBlogsPage>}></Route>
      <Route path="/blog/:id" element={<BlogPage></BlogPage>}></Route>
      <Route path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
      <Route path="/login-beta" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}
export default MainPage;
