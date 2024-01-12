import { useContext, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const initializeSeries=()=>{
    const dummyArr=[
        {
          "title": "The Art of Effective Blogging",
          "link": "https://example.com/the-art-of-effective-blogging"
        },
        {
          "title": "10 Tips for Engaging Blog Content",
          "link": "https://example.com/10-tips-for-engaging-blog-content"
        },
        {
          "title": "Mastering SEO: A Blogger's Guide",
          "link": "https://example.com/mastering-seo-a-bloggers-guide"
        },
        {
          "title": "The Art of Effective Blogging",
          "link": "https://example.com/the-art-of-effective-blogging"
        },
        {
          "title": "10 Tips for Engaging Blog Content",
          "link": "https://example.com/10-tips-for-engaging-blog-content"
        },
        {
          "title": "Mastering SEO: A Blogger's Guide",
          "link": "https://example.com/mastering-seo-a-bloggers-guide"
        },
        {
          "title": "The Art of Effective Blogging",
          "link": "https://example.com/the-art-of-effective-blogging"
        },
        {
          "title": "10 Tips for Engaging Blog Content",
          "link": "https://example.com/10-tips-for-engaging-blog-content"
        },
        {
          "title": "Mastering SEO: A Blogger's Guide",
          "link": "https://example.com/mastering-seo-a-bloggers-guide"
        },
        {
          "title": "The Art of Effective Blogging",
          "link": "https://example.com/the-art-of-effective-blogging"
        },
        {
          "title": "10 Tips for Engaging Blog Content",
          "link": "https://example.com/10-tips-for-engaging-blog-content"
        },
        {
          "title": "Mastering SEO: A Blogger's Guide",
          "link": "https://example.com/mastering-seo-a-bloggers-guide"
        },
    ];
    return dummyArr;
    // setSeriesArr(dummyArr);
}

function SeriesModal({isOpen,onClose,series}){

    const [seriesArr,setSeriesArr] = useState(initializeSeries);
    const navigate = useNavigate();

    document.addEventListener('keydown', function(event) {
      // Check if the pressed key is the Escape key (key code 27)
      if (event.key === 'Escape' || event.keyCode === 27) {
        // Call your method or function here
        onClose();
      }
      const targetDiv = document.getElementsByClassName('modal-container')[0];
      if (targetDiv &&!targetDiv.contains(event.target)){
        onClose();
      }
    });


    const handleClick=(link)=>{
        window.open(link,"_blank");
    };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white p-6 rounded shadow-lg relative z-50 w-[60%] my-[24px]">
            <div className="modal-content flex flex-col">
              <span className="text-[24px] font-bold mb-4">{series}</span>
              <ul className="overflow-y-scroll h-[400px]">
                {seriesArr.map((link,index)=>(
                    <li className="p-4 mb-2 border-2 rounded dotted"onClick={()=>{handleClick(link.link)}}>{link.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
}
export default SeriesModal;