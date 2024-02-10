import { useContext, useEffect, useState } from "react";
import MainHeader from "../components/Header/mainHeader";
import { ThemeContext } from "../ThemeContext";
import BlogSeriesModal from "../components/Series/blogSeriesModal";
import API from "../apis/apiCatalog";
import { useNavigate, useParams } from "react-router-dom";

function SeriesBlogsPage() {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const [blogArray, setBlogArray] = useState([]);
  const [seriesTitle, setSeriesTitle] = useState("");
  const [seriesPath, setSeriesPath] = useState("");
  const navigate = useNavigate();

  const toggleSeriesPanel = (state) => {
    if (state == "open") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    API.getBlogsInSeries(params).then((result) => {
      if (result.data) {
        setSeriesTitle(result.data.title);
        setSeriesPath(result.data.path_id);
        setBlogArray(result.data.blogsArray);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`body-center fixed flex justify-center top-0 left-0 ${
          theme == "dark" ? "dark-shadow" : "shadow"
        } bg-white z-10`}
      >
        <MainHeader></MainHeader>
      </div>
      <div className="pt-12 ml-[10%] mr-[10%] pb-24 flex flex-col">
        <div
          className={`text-[26px] fixed w-[80%] p-2 z-5 text-center ${
            theme == "dark" ? "bg-darkTheme" : "bg-white"
          }`}
        >
          {seriesTitle}
        </div>
        {process.env.REACT_APP_ENV != "production" ? (
          <div
            className={`fixed w-[80%] p-2 z-5 mt-12 text-center ${
              theme == "dark" ? "bg-darkTheme" : "bg-white"
            }`}
            onClick={(e) => {
              toggleSeriesPanel("open");
            }}
          >
            Add Blogs
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col relative top-32">
          {blogArray.map((sampleBlog, index) => (
            <div
              className="p-4 border-4 rounded-4 mb-4"
              key={"link" + index}
              onClick={() => {
                navigate("/blog/" + sampleBlog.path_id);
              }}
            >
              {sampleBlog.title}
            </div>
          ))}
        </div>
      </div>
      <div>
        {isModalOpen && (
          <BlogSeriesModal
            isOpen={isModalOpen}
            seriesTitle={seriesTitle}
            seriesPath={seriesPath}
            length={blogArray.length}
            onClose={(e) => {
              toggleSeriesPanel("close");
            }}
          ></BlogSeriesModal>
        )}
      </div>
    </>
  );
}
export default SeriesBlogsPage;
