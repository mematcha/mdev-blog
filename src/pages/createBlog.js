import AddContent from "../components/addContent";
import AddParagraph from "../components/addParagraph";
import MainHeader from "../components/mainHeader";
import MarkDownComponent from "../components/markdownComponent";
import NoteMenu from "../components/noteMenu";
import Modal from "../components/modalPopup";

import { DeviceContext } from "../DeviceContext";
import { useContext, useState, useRef } from "react";
import SeriesModal from "../components/seriesModalPopup";

function CreateBlog() {
  const deviceContextVal = useContext(DeviceContext);
  
  const [textData, setTextData] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSource, setImgSource] = useState(null);
  const [blogTagsArr, setBlogTagsArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [seriesText, setSeriesText] = useState("");
  const [isSeriesModalOpen, toggleSeriesModal]=useState(false);

  const divRef = useRef();

  const handleTextData = (data) => {
    setTextData(data);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSeriesModal = () => {
    toggleSeriesModal(true);
  };

  const closeSeriesModal = () =>{
    toggleSeriesModal(false);
  };



  function getRandomLightColor() {
    const letters = "ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  }

  function toggleColor(tag) {
    const randomColor = getRandomLightColor();
    return randomColor;
  }

  const openEditableBlogTag = () => {
    var array = [...blogTagsArr];
    array.push({ isInput: true, text: "" });
    setBlogTagsArr(array);
  };

  const handleSeriesChange = (e) =>{
    const targetInput = document.querySelector("[purpose='series']");
    if(targetInput.value.length>=3){
      targetInput.style.width = targetInput.value.length * 7 + "px";
    }

    if(e.target.value.trim()!=""){
      setSeriesText(e.target.value);
    }
  };

  const handleChange = (index, e) => {
    setInputValue(e.target.value);
    var array = [...blogTagsArr];
    blogTagsArr[index].text = e.target.value;
    console.log(e.target.value, index);
    divRef.current = e.target;
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Click occurred outside the div
      // Do something here
      console.log("Clicked outside the div");
    }
  };

  const handleKeyDown = (index, e) => {
    const targetInput = document.querySelector([`[index="${index}"]`]);
    if(targetInput.value.length>=21){
      targetInput.style.width = targetInput.value.length * 8 + "px";
    }
    if (e.key === "Enter" ) {
      // Do something when Enter is pressed
      console.log("Enter key pressed!");
      
      const blogTag = blogTagsArr[index];
      targetInput.style.width = targetInput.value.length * 8 + "px";
      if(blogTag.text.trim().length>0){
        targetInput.parentElement.parentElement.style.backgroundColor =
        toggleColor(targetInput.value);
        blogTag.isInput = false;

      }

    }
    if(e.key=="Backspace"){
      if(index!=0 && targetInput.value.length==0){
        const newArr=[...blogTagsArr];
        newArr.splice(index,1);
        setBlogTagsArr(newArr);
      }

    }
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Click occurred outside the div
      // Do something here
      console.log("Clicked outside the div");
    }
  };
  const openEditTag = (blogTag) => {
    if (blogTag.isInput) {
      blogTag.isInput = false;
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="body-center flex fixed justify-center top-0 left-0 shadow bg-white z-10">
          <MainHeader></MainHeader>
        </div>
        <div
          className={`flex flex-col relative items-start justify-start left-0  mt-12 ${
            deviceContextVal === "mobile" ? "mr-[15%] ml-[15%]": "mr-[25%] ml-[05%]"
          } text-[16px]`}
        >
          <div className="flex w-[70%] text-[12px] font-bold fixed z-5 pb-4 pt-4 bg-white flex-row justify-between">
            <button
              className="px-2 h-[40px] bg-slate-100 border-gray-200 "
              onClick={openModal}
            >
              Add Cover
            </button>
            <div>
              <button
                className="px-2 h-[40px] mr-4 bg-slate-100 border-gray-200"
                onClick={() => {
                  setIsEdit(true);
                  console.log(textData);
                }}
              >
                Edit
              </button>
              <button
                className="px-2  h-[40px] bg-slate-100 border-gray-200"
                onClick={() => {
                  setIsEdit(false);
                  console.log(textData);
                }}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="relative top-12 z-0">
            <div className="flex justify-around align-center mt-[40px] bg-slate-100">
              {imgSource == null ? (
                <></>
              ) : (
                <img src={imgSource} alt="Uploaded Image" className=""></img>
              )}
            </div>
            <h1 className="py-4 text-[36px] font-bold">
              24 Open-Source Projects for Developers in 2023 🔥 👍
            </h1>
            <ul className="flex flex-row pb-4 text-[12px] font-bold ">
              {blogTagsArr.map((blogTag, index) => (
                <li
                  className={`px-2 py-1 mx-1 rounded border-4 border-transparent bg-slate-100 `}
                >
                  <div
                    ref={divRef}
                    className={`flex flex-row items-center ${
                      blogTag.isInput || isEdit==false ? "hidden" : ""
                    }`}
                  >
                    #{""}
                    <input
                      value={blogTag.text}
                      index={index}
                      onChange={(e) => {
                        handleChange(index, e);
                      }}
                      onKeyDown={(e) => {
                        handleKeyDown(index, e);
                      }}
                      placeholder="Type something"
                      className="outline-none bg-transparent fit-content"
                      type="text"
                      maxLength="21"
                    ></input>
                  </div>
                  <div
                    className={`${blogTag.isInput || isEdit==false? "" : "hidden"}`}
                    onClick={openEditTag(blogTag)}
                  >
                    #{" "}
                    <span className="outline-none bg-transparent fit-content">
                      {blogTag.text}
                    </span>
                  </div>
                </li>
              ))}
              <li
                className={`px-2 py-1 mx-1 rounded border-4 border-transparent bg-slate-100 
                ${
                  blogTagsArr.length > 2 || isEdit==false ? "hidden" : ""
                }`}
                onClick={openEditableBlogTag}
              >
                +
              </li>
              {/* <div class="group">
                <li className="px-2 py-1 mx-1 cursor-pointer rounded border-4 border-transparent bg-slate-100">
                  i
                </li>
                <div class="tooltip hidden group-hover:block absolute left-[96px] bottom-[108px] bg-slate-100 text-slate-500 py-1 px-1 rounded-md">
                  <div class="arrow-right"></div>
                  This is a custom tooltip
                </div>
              </div> */}
            </ul>
            <div className="p-2 mb-4 bg-slate-200 w-fit border-16 rounded font-verdana text-[12px] font-bold">
              {!isEdit && <span onClick={()=>{openSeriesModal();}}>{seriesText}</span>}
              {isEdit && (<input
                            value={seriesText}
                            onChange={(e)=>{handleSeriesChange(e);}} 
                            type="text" 
                            purpose="series" 
                            className="border-transparent outline-none bg-slate-200 rounded border-4">

                            </input>)}
            </div>
          </div>
        </div>
        <div
          className={`${
            deviceContextVal === "mobile" ? "mx-[05%]" : "ml-[05%] mr-[25%]"
          } relative top-12`}
        >
          <MarkDownComponent
            sendTextData={handleTextData}
            isEdit={isEdit}
          ></MarkDownComponent>
        </div>
      </div>
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          setImageSource={setImgSource}
        />
      </div>
      <div>
        <SeriesModal
          isOpen={isSeriesModalOpen}
          onClose={closeSeriesModal}
          series={seriesText}
        >
        </SeriesModal>
      </div>
    </>
  );
}

export default CreateBlog;
