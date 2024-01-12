// Modal.js

import React, { useState } from "react";

const Modal = ({ isOpen, onClose, setImageSource }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

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

  const removeImage=()=>{
    // setImageSource(null);
    setSelectedImage(null);
    setIsImgLoaded(false);
  }

  const saveImage=()=>{
    setImageSource(selectedImage);
    onClose();
  } 
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
            Drag and drop your cover image in the box!
          </h2>
          <h4 className="mb-4">
            Or just select your file to upload by clicking &nbsp;
            <a className="text-blue-500 underline" onClick={openFile}>
              here!
            </a>
          </h4>
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
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded" />
            ) : (
              <div className="text-[48px]">+</div>
            )}
          </div>
          <div className="flex self-end p-4">
          <button
              className={`modal-close-button w-full p-2 mr-2 border-2 text-24 ${isImgLoaded==true?"":"hidden"}`}
              onClick={removeImage}
            >
              Delete
            </button>
            <button
              className={`modal-close-button w-full p-2 border-2 text-24 `}
              onClick={saveImage}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
