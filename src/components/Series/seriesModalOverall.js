import { useContext, useState, useRef } from "react";
import API from "../../apis/apiCatalog";

const initializeSeries = () => {
  API.showUserSeries().then(response=>{
    console.log(response);
  });
  const dummyArr = [
    {
      title: "Data Science Series",
      link: "https://example.com/the-art-of-effective-blogging",
      index: 2,
    },
    {
      title: "Machine Learning Series",
      link: "https://example.com/10-tips-for-engaging-blog-content",
      index: 4,
    },
    {
      title: "Frontend Mastery",
      link: "https://example.com/mastering-seo-a-bloggers-guide",
      index: 5,
    },
    {
      title: "Computer Architecture Series",
      link: "https://example.com/the-art-of-effective-blogging",
      index: 6,
    },
    {
      title: "Mobile Development Series",
      link: "https://example.com/10-tips-for-engaging-blog-content",
      index: 4,
    },
    {
      title: "Backend Mastery",
      link: "https://example.com/mastering-seo-a-bloggers-guide",
      index: 5,
    },
    {
      title: "Research",
      link: "https://example.com/mastering-seo-a-bloggers-guide",
      index: 1,
    },
  ];
  return dummyArr;
  // setSeriesArr(dummyArr);
};

function SeriesOverall({ isOpen, onClose, series, selected }) {
  const [seriesArr, setSeriesArr] = useState(initializeSeries);
  const [selectedSeries, setSelectedSeries] = useState({});
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const selectSeries = (series) => {
    selected(series.title);
  };

  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the Escape key (key code 27)
    if (event.key === "Escape" || event.keyCode === 27) {
      // Call your method or function here
      onClose();
    }
    const targetDiv = document.getElementsByClassName("modal-container")[0];
    if (targetDiv && !targetDiv.contains(event.target)) {
      onClose();
    }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white p-6 rounded shadow-lg relative z-50 w-[60%] my-[24px]">
        <div className="modal-content flex flex-col">
          <span className="pb-4 flex flex-row justify-between">
            <span>Page will be ..</span>
            <button className="px-2 py-1 bg-slate-100">Unselect All</button>
          </span>
          <ul className="overflow-y-scroll h-[400px]">
            {seriesArr.map((link, index) => (
              <li
                className="p-4 mb-2 border-2 rounded dotted cursor-pointer flex flex-row items-center justify-between"
                onClick={() => {
                  setSelectedSeries({ series: link, index: index });
                }}
              >
                <span>
                  Part {link.index} of{" "}
                  <span className="font-bold">{link.title}</span>
                </span>
                {selectedSeries.index == index && (
                  <span className="icon-check"></span>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <div>Create New Series</div>
            <button
              className="px-2 py-1 bg-slate-200 rounded"
              onClick={() => {
                selectSeries(selectedSeries.series);
                onClose();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeriesOverall;
