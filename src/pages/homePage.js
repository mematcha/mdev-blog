import MainHeader from "../components/mainHeader";
import Footer from "../components/footer";
import MainSearch from "../components/mainSearch";
import BlogCardNew from "../components/blogCard";
import MLCard from "../components/mailingListCard";
import { DeviceContext } from '../DeviceContext';
import { useContext } from 'react';

function HomePage() {

  const deviceContextVal= useContext(DeviceContext);


  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
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
            <BlogCardNew></BlogCardNew>
            <BlogCardNew></BlogCardNew>
            <BlogCardNew></BlogCardNew>
            <BlogCardNew></BlogCardNew>
            <BlogCardNew></BlogCardNew>
            <BlogCardNew></BlogCardNew>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
