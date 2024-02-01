import React, { createContext, useState, useEffect, useRef } from "react";
import { getRoleAssigned } from "./auth/authenticator";

const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
  const roleType= useRef(getRoleAssigned());
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
    <DeviceContext.Provider value={{
      deviceType:deviceType,
      role:roleType.current
    }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceProvider };
