import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
import UserPage from "./pages/userPage";
import { Routes, Route } from "react-router-dom";
import CarouselGeneral from "./components/Carousel/Carousel";
import CreateBlog from "./pages/createBlog";
import AboutMe from "./pages/AboutMe";
import LoginPage from "./pages/loginPage";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/page" element={<BlogPage />} />
      <Route path="/user" element={<UserPage></UserPage>}></Route>
      <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
      <Route path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
      <Route path="/login-beta" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}
export default MainPage;
