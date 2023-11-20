import MainHeader from "../components/mainHeader";
import Footer from "../components/footer";
import MainSearch from "../components/mainSearch";
import BlogCardNew from "../components/blogCard";
import MLCard from "../components/mailingListCard";
import { DeviceContext } from '../DeviceContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const deviceContextVal= useContext(DeviceContext);
  const navigate = useNavigate();
  const handleOnClick=()=>{
    navigate('/create-blog');
  };

  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`body ${
          deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[15%]"
        }`}
      >
        <MainSearch></MainSearch>
        <div className="pb-[60px] flex flex-row">
          {/* <MLCard></MLCard> */}
          <div>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
            <BlogCardNew handleOnClick={handleOnClick}></BlogCardNew>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
