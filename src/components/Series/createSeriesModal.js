import React, { useState } from "react";
import API from "../../apis/apiCatalog";

function CreateSeriesModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [title,setTitle]=useState("");  

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        // setImageSource(reader.result);
        setIsImgLoaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFile = (e) => {
    document.getElementById("fileInput").click();
    
  };

  const acceptFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
          // setImageSource(reader.result);
          setIsImgLoaded(true);
        };
        reader.readAsDataURL(file);
      }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const changeTitle=(event)=>{
    setTitle(event.target.value);
  };

  const removeImage = () => {
    // setImageSource(null);
    setSelectedImage(null);
    setIsImgLoaded(false);
  };

  const saveImage = () => {
    const file=document.getElementById("fileInput").files[0];

    if (file && file.type.startsWith("image/")) {
        if(title.trim()!=""){
            API.checkSeriesByName({
                title:title
            }).then((result)=>{
                if(result.data.statusCode==0){
                    API.uploadImage(file).then((result) => {
                        if (result && result.data && result.data.url) {
                          API.createNewSeries({
                            imgUrl: result.data.url,
                            title: title,
                          });
                        }
                      });
                }
            })

        }
    }
  };
  if (!isOpen) return null;

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
          <h2 className="text-2xl font-bold mb-4">
            Upload poster by clicking &nbsp;
            <a className="text-blue-500 underline" onClick={openFile}>
              here!
            </a>{" "}
          </h2>
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={acceptFile}
            className="hidden"
          ></input>
          <div
            className="w-full h-[300px] bg-slate-200 
                            flex items-center justify-center 
                            dropzone"
            onDrag={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded" />
            ) : (
              <div className="text-[48px]">+</div>
            )}
          </div>
          <div className="w-full">
            <input
              className="w-[100%] border-2 bg-slate-100 p-2"
              value={title}
              onChange={(e)=>{changeTitle(e);}}
              onKeyDown={(e)=>{changeTitle(e);}}
              placeholder="Series Name"
            ></input>
          </div>
          <div className="flex self-end p-4">
            <button
              className={`modal-close-button w-full p-2 mr-2 border-2 text-24 ${
                isImgLoaded == true ? "" : "hidden"
              }`}
              onClick={removeImage}
            >
              Delete
            </button>
            <button
              className={`modal-close-button w-full p-2 border-2 text-24 `}
              onClick={saveImage}
            >
              Create Series
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSeriesModal;
