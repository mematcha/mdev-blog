import MainHeader from "../components/Header/mainHeader";
import MarkDownComponent from "../components/markdownComponent";
import Modal from "../components/modalPopup";

import { DeviceContext } from "../DeviceContext";
import { useContext, useState, useRef, useEffect } from "react";
import SeriesModal from "../components/Series/seriesModalPopup";
import SeriesOverall from "../components/Series/seriesModalOverall";

import API from "../apis/apiCatalog";
import InfoPopup from "../components/OtherComps/informationPopup";
import { ThemeContext } from "../ThemeContext";

function CreateBlog() {
  //#region states and constants
  const deviceContextVal = useContext(DeviceContext);

  const [textData, setTextData] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSource, setImgSource] = useState(null);
  const [blogTagsArr, setBlogTagsArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [seriesText, setSeriesText] = useState("");
  const [isSeriesModalOpen, toggleSeriesModal] = useState(false);
  const [isSeriesOverallOpen, toggleSeriesOverall] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubText, setBlogSubText] = useState("");
  const [showInfoPopup, setShowInfoPopup] = useState({
    state:false,
    message:""
  });
  const {theme} = useContext(ThemeContext);

  const blogMetaDataType = {
    title: "", //title of the blog
    subText: "", //subtext of the blog
    date: "", //current date or published date(if getting edited),
    blogTags: [], //blog tags for the blog
    isBlogInSeries: false, //is blog in a series
    series: {
      //series object
      name: "",
      index: 3,
    },
    isImageInBlog: false, //is image in blog,
    image: "", //image source
  };

  const divRef = useRef();

  const environment = process.env.REACT_APP_ENV;
  //#endregion

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

  const openSeriesOverall = () => {
    toggleSeriesOverall(true);
  };

  const closeSeriesOverall = () => {
    toggleSeriesOverall(false);
  };

  const closeSeriesModal = () => {
    toggleSeriesModal(false);
  };

  //reload control
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message =
  //       "Are you sure you want to leave? Your changes may not be saved.";
  //     event.returnValue = message; // Standard for most browsers
  //     return message; // For some older browsers
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

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

  const handleSeriesChange = (e) => {
    const targetInput = document.querySelector("[purpose='series']");
    if (targetInput.value.length >= 3) {
      targetInput.style.width = targetInput.value.length * 7 + "px";
    }

    if (e.target.value.trim() != "") {
      setSeriesText(e.target.value);
    }
  };

  const handleChange = (index, e) => {
    setInputValue(e.target.value);
    var array = [...blogTagsArr];
    blogTagsArr[index].text = e.target.value;
    divRef.current = e.target;
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Click occurred outside the div
      // Do something here
      console.log("Clicked outside the div");
    }
  };

  const handleChangeTitle = (e) => {
    setBlogTitle(e.target.value);
  };

  const handleChangeSubText = (e) => {
    setBlogSubText(e.target.value);
  };

  const handleKeyDown = (index, e) => {
    const targetInput = document.querySelector([`[index="${index}"]`]);
    if (targetInput.value.length >= 21) {
      targetInput.style.width = targetInput.value.length * 8 + "px";
    }
    if (e.key === "Enter") {
      // Do something when Enter is pressed
      console.log("Enter key pressed!");

      const blogTag = blogTagsArr[index];
      targetInput.style.width = targetInput.value.length * 8 + "px";
      if (blogTag.text.trim().length > 0) {
        blogTag.isInput = false;
      }
    }
    if (e.key == "Backspace") {
      if (index != 0 && targetInput.value.length == 0) {
        const newArr = [...blogTagsArr];
        newArr.splice(index, 1);
        setBlogTagsArr(newArr);
      }
    }
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Click occurred outside the div
      // Do something here
      console.log("Clicked outside the div");
    }
  };

  const handleKeyDownTitle = (e) => {
    setBlogTitle(e.target.value);
  };

  const handleKeyDownSubText = (e) => {
    setBlogSubText(e.target.value);
  };

  const openEditTag = (blogTag) => {
    if (blogTag.isInput) {
      blogTag.isInput = false;
    }
  };

  const uploadBlogData = () => {
    setIsEdit(false);
    const blogMetaData = {
      title: blogTitle,
      subText: blogSubText,
      cover: imgSource,
      tags: blogTagsArr,
      isSeriesAttached: false,
      series: {
        name: seriesText,
        index: 0,
      },
      content: textData,
    };
    let allowCode = 0;
    if (blogMetaData) {
      if (blogMetaData.title.trim() == "") {
        allowCode = 0;
      } else if (blogMetaData.title.length < 4) {
        allowCode = 0;
      } else if (blogMetaData.content.length == 0) {
        allowCode = 0;
      } else {
        allowCode = 1;
      }
    }
    if (allowCode == 1) {
      console.log(blogMetaData);
      API.publishBlog(blogMetaData);
      setShowInfoPopup({
        state:true,
        message:"Blog Published Successfully!"
      });
      console.log("Blog Published!");
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="body-center flex fixed justify-center top-0 left-0 shadow z-10">
          <MainHeader></MainHeader>
        </div>
        <div
          className={`flex flex-col relative left-0  mt-12 ${
            deviceContextVal === "mobile"
              ? "mr-[05%] ml-[05%]"
              : "mr-[10%] ml-[10%]"
          } text-[16px]`}
        >
          <div
            className={`flex text-[12px] font-bold ${
              deviceContextVal === "mobile" ? "w-[90%]" : "w-[80%]"
            } fixed z-5 py-4 flex-row justify-between`}
          >
            <div>
              {environment == "staging" && (
                <button
                  className={`px-2 py-1 mr-2 h-[40px] border-gray-200 ${
                    !isEdit ? "opacity-0" : ""
                  }`}
                  onClick={openModal}
                >
                  Add Cover
                </button>
              )}
            </div>
            <div>
              <button
                className="px-2 py-1 h-[40px] mr-2 border-gray-200"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                Edit
              </button>
              <button
                className="px-2  h-[40px] mr-2  border-gray-200"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                Preview
              </button>
              <button
                className="px-2 h-[40px] bg-green-900 border-gray-200"
                onClick={() => {
                  uploadBlogData();
                }}
              >
                Publish
              </button>
            </div>
          </div>
          <div className={`relative top-20 z-0 ${theme=="dark"?"bg-darkTheme":""}`}>
            <div className={`flex justify-around align-center ${theme=="dark"?"bg-darkTheme":""}`}>
              {imgSource == null ? (
                <></>
              ) : (
                <img src={imgSource} alt="Uploaded Image" className=""></img>
              )}
            </div>
            {isEdit && (
              <h1 className="text-[36px] font-bold">
                <input
                  placeholder="Type something"
                  className={`w-[100%] outline-none ${theme=="dark"?"bg-darkTheme":""}`}
                  value={blogTitle}
                  onChange={(e) => {
                    handleChangeTitle(e);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDownTitle(e);
                  }}
                ></input>
              </h1>
            )}
            {!isEdit && (
              <h1 className="py-4 text-[36px] font-bold">{blogTitle}</h1>
            )}
            {isEdit && (
              <h1 className="text-[16px]">
                <textarea
                  placeholder="Write Subtext here (max character limit is 400)"
                  className={`w-[100%] outline-none ${theme=="dark"?"bg-darkTheme":""}`}
                  value={blogSubText}
                  maxLength={400}
                  maxRows={7}
                  style={{
                    maxHeight:"400px"
                  }}
                  onChange={(e) => {
                    handleChangeSubText(e);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDownSubText(e);
                  }}
                ></textarea>
              </h1>
            )}
            {!isEdit && (
              <h1 className="py-4 text-[16px]">{blogSubText}</h1>
            )}
            <ul className="flex flex-row py-2 text-[12px] font-bold ">
              {blogTagsArr.map((blogTag, index) => (
                <li
                  className={`px-2 py-1 mx-1 rounded border-4 border-transparent ${theme=="dark"?"bg-darkTheme":"bg-slate-100 "}`}
                >
                  <div
                    ref={divRef}
                    key={"tag" + index}
                    className={`flex flex-row items-center ${
                      blogTag.isInput || isEdit == false ? "hidden" : ""
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
                    key={"span" + index}
                    className={`${
                      blogTag.isInput || isEdit == false ? "" : "hidden"
                    }`}
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
                className={`px-2 py-1 rounded border-4 border-transparent  
                ${blogTagsArr.length > 2 || isEdit == false ? "hidden" : ""} ${theme=="dark"?"bg-darkTheme":""}`}
                onClick={openEditableBlogTag}
              >
                +
              </li>
              <div
                className={`p-2  w-fit border-16 rounded font-verdana text-[12px] font-bold" ${
                  seriesText == "" && !isEdit ? "hidden" : ""
                }
                ${blogTagsArr.length == 0 && !isEdit ? "" : "ml-2"} ${theme=="dark"?"bg-darkTheme":"bg-slate-200"}`}
              >
                {!isEdit && <span>{seriesText}</span>}
                {isEdit && (
                  <div
                    onClick={() => {
                      openSeriesOverall();
                    }}
                  >
                    {seriesText == "" ? "Add Series" : seriesText}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>

        <div
          className={`${
            deviceContextVal === "mobile" ? "mx-[05%]" : "ml-[10%] mr-[10%]"
          } relative top-24`}
        >
          <MarkDownComponent
            sendTextData={handleTextData}
            isEdit={isEdit}
            isPresentMode={false}
            initialContent={[
              {
                type: "paragraph",
                children: [{ text: "" }],
              },
            ]}
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
        ></SeriesModal>
      </div>
      <div>
        <SeriesOverall
          isOpen={isSeriesOverallOpen}
          onClose={closeSeriesOverall}
          series={seriesText}
          selected={setSeriesText}
        ></SeriesOverall>
      </div>
      {showInfoPopup.state && <InfoPopup message={"Blog Successfully Publised"} />}
    </>
  );
}

export default CreateBlog;
