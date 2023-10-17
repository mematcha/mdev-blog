import "./mainHeader.scss";
import LogoTransparent from "../assets/Asset 6.svg";
import LogoBlack from "../assets/logo_v2.svg";
import UserLogoWhite from "../assets/userLogoDefault.svg";
import { DeviceContext } from "../DeviceContext";
import { useContext } from "react";

//Header Method
function MainHeader() {
  const deviceContextVal = useContext(DeviceContext);
  console.log(deviceContextVal);
  return (
    //Main Header Class
    <div
      className={`text-3xl h-12 p-1
        ${deviceContextVal === "mobile" ? "w-[90%]" : "w-[80%]"} 
        bg-white
        flex items-center justify-between`}
    >
      <img src={LogoBlack} alt="logo" className="w-8 h-8"></img>
      <div className="flex font-bold flex-row text-[12px] items-center">
        <span className="px-2">About Me</span>
        <span className="px-2">Other Projects</span>
        <span className="px-2">Portfolio</span>
        <img src={UserLogoWhite} alt="logo" className="w-6 h-6 ml-2"></img>
      </div>
    </div>
  );
}

export default MainHeader;
