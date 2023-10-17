import MainHeader from "../components/mainHeader";
import Footer from "../components/footer";
import MainSearch from "../components/mainSearch";
import BlogCardNew from "../components/blogCard2";
import MLCard from "../components/mailingListCard";

function HomePage(props) {
  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`body ${
          props.deviceType === "mobile" ? "mx-[20%]" : "mx-[10%]"
        }`}
      >
        <MainSearch></MainSearch>
        <div className="pb-[60px] flex flex-row">
          <MLCard></MLCard>
          <div className="pb-[60px]">
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
