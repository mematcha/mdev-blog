import React, { createContext, useState, useEffect } from "react";

const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) {
      return "mobile";
    } else if (width <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  const handleResize = () => {
    setDeviceType(getDeviceType());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={deviceType}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceProvider };
