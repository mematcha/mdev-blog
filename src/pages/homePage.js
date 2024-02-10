import MainHeader from "../components/Header/mainHeader";
import Footer from "../components/OtherComps/footer";
import MainSearch from "../components/mainSearch";
import BlogCardNew from "../components/BlogCard/blogCard";
import { DeviceContext } from '../DeviceContext';
import { useContext, useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../ThemeContext";
import API from "../apis/apiCatalog";
function HomePage() {
  const environment = process.env.REACT_APP_ENV;

  const { deviceType, role }= useContext(DeviceContext);
  const {theme} = useContext(ThemeContext);

  const [blogsArray, setBlogsArray] = useState([]);
  const [queryInp,setQueryInp] = useState("");
  const navigate = useNavigate();
  const handleOnClick=(blog)=>{
    if(blog.path_id){
      navigate('/blog/'+blog.path_id);
    }
  };

  useEffect(() => {
    document.title = "Sathwik Matcha | Home";

    API.getAllBlogs(queryInp).then((result)=>{
      setBlogsArray(result);
    });
    

  }, [queryInp]);
  
  return (
    <>
      <div className={`body-center fixed flex justify-center top-0 left-0 ${theme=="dark"?"dark-shadow":"shadow"} z-10`}>
        <MainHeader></MainHeader>
      </div>
      <div
        className={`body ${
          deviceType === "mobile" ? "mx-[05%]" : "mx-[10%]"
        }`}
      >
        {
          true && (
            <MainSearch query={setQueryInp}></MainSearch>
          )
        }
        <div className="pb-[60px] pt-32 flex flex-row">
          {/* <MLCard></MLCard> */}
          <div>
            {blogsArray.map((blog,index)=>(
              <BlogCardNew key={"blogCard"+index} blog={blog} handleOnClick={()=>{handleOnClick(blog);}}></BlogCardNew>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default HomePage;
