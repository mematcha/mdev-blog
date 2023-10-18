import AddContent from "../components/addContent";
import AddParagraph from "../components/addParagraph";
import MainHeader from "../components/mainHeader";
import MarkDownComponent from "../components/markdownComponent";
import { DeviceContext } from '../DeviceContext';
import { useContext } from 'react';

function CreateBlog() {

  const deviceContextVal= useContext(DeviceContext);


  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`body ${
          deviceContextVal === "mobile" ? "mx-[05%]" : "mx-[10%]"
        }`}        
      >
        <MarkDownComponent></MarkDownComponent>
      </div>
    </>
  );
}

export default CreateBlog;
