import { useEffect, useState } from "react";
import MainSearch from "../mainSearch";
import MainSearchBlog from "../seriesBlogSearch";

function BlogSeriesModal({ isOpen, onClose }) {
  const [queryInp, setQueryInp] = useState("");

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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white p-6 rounded shadow-lg relative z-50 w-[60%] my-[24px]">
        <button
          className="modal-close-button w-full text-24 flex justify-end"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content flex flex-col">
          <MainSearchBlog query={setQueryInp}></MainSearchBlog>
        </div>
        <ul className="overflow-y-scroll h-[400px]">
          {dummyArr.map((link, index) => (
            <li
              key={"link"+index}
              className="p-4 mb-2 border-2 rounded dotted cursor-pointer flex flex-row items-center justify-between"
              //   onClick={() => {
              //     setSelectedSeries({ series: link, index: index });
              //   }}
            >
              <span>
                Part {link.index} of{" "}
                <span className="font-bold">{link.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogSeriesModal;
