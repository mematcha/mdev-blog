import AddContent from "../components/addContent";
import AddParagraph from "../components/addParagraph";
import MainHeader from "../components/mainHeader";
import MarkDownComponent from "../components/markdownComponent";
import NoteMenu from "../components/noteMenu";
import Modal from "../components/modalPopup";

import { DeviceContext } from "../DeviceContext";
import { useContext, useState, useRef } from "react";

function CreateBlog() {
  const deviceContextVal = useContext(DeviceContext);
  const [textData, setTextData] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSource, setImgSource] = useState(null);
  const [blogTagsArr, setBlogTagsArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
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

  const openEditableBlogTag = () => {
    var array = [...blogTagsArr];
    array.push({isInput:true,text:""});
    setBlogTagsArr(array);
  };

  const handleChange = (index,e) => {
    setInputValue(e.target.value);
    var array = [...blogTagsArr];
    blogTagsArr[index].text=e.target.value;
    console.log(e.target.value,index);
  };

  const handleKeyDown = (index,e) => {
    if (e.key === "Enter") {
      // Do something when Enter is pressed
      console.log("Enter key pressed!");
    }
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Click occurred outside the div
      // Do something here
      console.log("Clicked outside the div");
    }
  };

  const inputStyle = {
    width: `${inputValue.length < 9 ? 9 * 7 : inputValue.length * 7}px`, // Adjust the multiplier to control the width
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="body-center flex fixed justify-center top-0 left-0 shadow bg-white z-10">
          <MainHeader></MainHeader>
        </div>
        <div
          className={`flex flex-col relative items-start justify-start left-0  mt-12 ${
            deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"
          } text-[16px]`}
        >
          <div className="flex w-[80%] text-[12px] font-bold fixed z-5 pb-4 pt-4 bg-white flex-row justify-between">
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
                <li className="px-2 py-1 mx-1 rounded border-4 border-transparent bg-slate-100">
                  <div ref={divRef} hidden={!blogTag.isInput}>
                    #{""}
                    <input
                      value={blogTag.text}
                      onChange={(e)=>{handleChange(index,e);}}
                      onKeyDown={(e)=>{handleKeyDown(index,e)}}
                      style={inputStyle}
                      placeholder="Type something"
                      className="outline-none bg-transparent fit-content"
                      type="text"
                      maxLength="21"
                    ></input>
                  </div>
                  <div hidden={blogTag.isInput}>
                    #{" "}
                    <span className="outline-none bg-transparent fit-content">
                      {blogTag.text}
                    </span>
                  </div>
                </li>
              ))}
              <li
                className="px-2 py-1 mx-1 rounded border-4 border-transparent bg-slate-100"
                onClick={openEditableBlogTag}
              >
                +
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${
            deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"
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
    </>
  );
}

export default CreateBlog;
