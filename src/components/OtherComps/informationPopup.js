import React, { useState, useEffect } from "react";
import "./informationPopup.scss";

const InfoPopup = ({ message }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={`info-popup`}>
          <p>{message}</p>
          {/* <div className="message">
            <button onClick={closePopup} className="close-button">
              Close
            </button>
          </div> */}
          {/* <div className="progress-loader"></div> */}
        </div>
      )}
    </>
  );
};

export default InfoPopup;
