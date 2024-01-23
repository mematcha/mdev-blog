import MainHeader from "../components/Header/mainHeader";
import Footer from "../components/OtherComps/footer";
import MainSearch from "../components/mainSearch";
import BlogCardNew from "../components/BlogCard/blogCard";
import { DeviceContext } from '../DeviceContext';
import { useContext, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../ThemeContext";

function HomePage() {

  useEffect(() => {
    document.title = "Home | mDev";
  }, []);

  const deviceContextVal= useContext(DeviceContext);
  const navigate = useNavigate();
  const handleOnClick=()=>{
    navigate('/create-blog');
  };
  const blogs = [
    {
      title: "My First Blog Post",
      date: "2023-12-15"
    },
    {
      title: "5 Tips for Effective Coding",
      date: "2023-12-18"
    },
    {
      title: "Exploring React's New Features",
      date: "2023-12-20"
    },
    {
      title: "Mastering JavaScript Arrays",
      date: "2023-12-22"
    },
    {
      title: "Building User-Friendly Interfaces with Tailwind CSS",
      date: "2023-12-25"
    },
    {
      title: "Creating Responsive Themes for Web Applications",
      date: "2023-12-27"
    },
    {
      title: "Optimizing Performance in React Apps",
      date: "2023-12-29"
    }
  ];
  const {theme}=useContext(ThemeContext);
  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`body ${
          deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"
        }`}
      >
        <MainSearch></MainSearch>
        <div className="pb-[60px] flex flex-row">
          {/* <MLCard></MLCard> */}
          <div>
            {blogs.map((blog,index)=>(
              <BlogCardNew key={"blogCard"+index}blog={blog} handleOnClick={handleOnClick}></BlogCardNew>
            ))}
            {/* <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
