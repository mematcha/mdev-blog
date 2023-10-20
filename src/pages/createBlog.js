import AddContent from "../components/addContent";
import AddParagraph from "../components/addParagraph";
import MainHeader from "../components/mainHeader";
import MarkDownComponent from "../components/markdownComponent";
import NoteMenu from "../components/noteMenu";
import { DeviceContext } from "../DeviceContext";
import { useContext, useState } from "react";

function CreateBlog() {
  const deviceContextVal = useContext(DeviceContext);
  const [textData, setTextData] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  const handleTextData = (data) => {
    setTextData(data);
  };

  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col">
      <div className="body-center flex fixed justify-center top-0 left-0 shadow bg-white z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`flex flex-col relative items-start justify-start left-0  mt-12 ${
          deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"
        } text-[16px]`}
      >
        <div className="flex w-[80%] fixed z-5 mb-4 pt-4 bg-white flex-row justify-between">
          <button
            className="p-3 mb-4 bg-slate-100 rounded-[8px] border-gray-200  text-[18px]"
            onClick={openFilePicker}
          >
            Add Cover
          </button>
          <div>
            <button
              className="p-3 mb-4 mr-4 bg-slate-100 rounded-[8px] border-gray-200  text-[18px]"
              onClick={() => {
                setIsEdit(true);
                console.log(textData);
              }}
            >
              Edit
            </button>
            <button
              className="p-3 mb-4  bg-slate-100 rounded-[8px] border-gray-200 text-[18px]"
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
          <div>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
            ></input>
          </div>
          <h1 className="my-4 text-[48px] font-bold">
            24 Open-Source Projects for Developers in 2023 🔥👍
          </h1>
          <ul className="flex flex-row pb-4">
            <li className="px-4 py-1 mr-2 rounded border-4 border-gray-500">
              #webdev
            </li>
            <li className="px-4 py-1 mx-2 rounded border-4 border-gray-500">
              #javascript
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"} relative top-12`}
      >
        <MarkDownComponent
          sendTextData={handleTextData}
          isEdit={isEdit}
        ></MarkDownComponent>
      </div>
    </div>
  );
}

export default CreateBlog;
