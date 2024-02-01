import { useEffect, useState, useContext } from "react";
import MainSearch from "../mainSearch";
import MainSearchBlog from "../seriesBlogSearch";
import API from "../../apis/apiCatalog";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

function BlogSeriesModal({ isOpen, onClose, seriesTitle, seriesPath, length }) {
  const [queryInp, setQueryInp] = useState("");
  const [showConfirm, setShowConfirm] = useState({ show: false, index: -1 });
  const params = useParams();
  const [blogArray, setBlogArray] = useState([]);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    API.getBlogsNotInSeries(queryInp).then((result) => {
      setBlogArray(result.data);
    });
  }, [queryInp]);

  const addBlogToSeries=(link)=>{
    const reqData={
        series_path:seriesPath,
        blogMeta:link
    }
    API.addBlogToSeries(reqData).then((result)=>{
        if(result.status==200){
            console.log("Blog Added Successfully");
        }
    })
  };

  const showConfirmPop = (link, index) => {
    setShowConfirm({ state: true, index: index });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className={`${theme=="dark"?"bg-darkTheme":"bg-white"} modal-container  p-6 rounded shadow-lg relative z-50 w-[60%] my-[24px]`}>
        <div className="flex flex-row">
          <div className="modal-content flex flex-col w-[95%]">
            <MainSearchBlog query={setQueryInp}></MainSearchBlog>
          </div>
          <span
            className="modal-close-button text-[32px] ml-2 max-h-12 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <ul className="overflow-y-scroll h-[400px]">
          {blogArray.map((link, index) => (
            <li
              key={"link" + index}
              className="p-4 mb-2 border-2 rounded dotted cursor-pointer flex flex-col items-center justify-between"
              onClick={(e)=>{
                showConfirmPop(link, index);
              }}
              //   onClick={() => {
              //     setSelectedSeries({ series: link, index: index });
              //   }}
            >
              <span>
                <span className="font-bold">{link.title}</span>
              </span>
              {showConfirm.index == index && showConfirm.state && (
                <div className="flex flex-row w-[100%] rounded-4 border bg-slate-100 p-2 mt-2 items-center justify-between">
                  <span>This will be Part {length+1} of {seriesTitle} Series</span>
                  <button className="bg-green-200 p-2" onClick={(e)=>{addBlogToSeries(link);}}>Confirm</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogSeriesModal;
