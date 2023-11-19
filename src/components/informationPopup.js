import React, { useState, useEffect } from 'react';
import "./imformationPopup.scss";

const InfoPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`info-popup ${showPopup ? 'visible' : 'hidden'}`}>
      <div className="message">
        This is an information message.
        <button onClick={closePopup} className="close-button">
          Close
        </button>
      </div>
      <div className="progress-loader"></div>
    </div>
  );
};

export default InfoPopup;
