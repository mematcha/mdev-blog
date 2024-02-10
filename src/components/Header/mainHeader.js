import "./mainHeader.scss";
import LogoTransparent from "../../assets/Asset 6.svg";
import LogoBlack from "../../assets/Asset 24.svg";
import UserLogoWhite from "../../assets/userLogoDefault.svg";
import { DeviceContext } from "../../DeviceContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import DisplayToggle from "./displayToggle";

//Header Method
function MainHeader() {
  const { deviceType, role } = useContext(DeviceContext);
  const { theme } = useContext(ThemeContext);
  const environment = process.env.REACT_APP_ENV;

  return (
    //Main Header Class
    <div
      className={`text-3xl h-12 p-1 w-[100%]
        ${deviceType === "mobile" ? "px-[5%]" : "px-[10%]"} 
        flex items-center justify-between`}
      style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
    >
      <Link to="/">
        <img src={LogoBlack} alt="logo" className="w-14"></img>
      </Link>
      <div className="flex font-bold flex-row text-[12px] items-center">
        <DisplayToggle></DisplayToggle>
        {/* {environment == "development-togo" && (
          <Link to="/user">
            <span className="px-2">User</span>
          </Link>
        )} */}
        <Link to="/series">
          <span className="px-2 cursor-not-allowed pointer-events-none">
            Series
          </span>
        </Link>
        <Link to="/about-me">
          <span className="px-2">About Me</span>
        </Link>
        <Link to="/my-projects">
          {" "}
          <span className="px-2 cursor-not-allowed pointer-events-none">
            My Projects
          </span>
        </Link>
        {/* <span className="px-2">Portfolio</span> */}
        {/* <img src={UserLogoWhite} alt="logo" className="w-6 h-6 ml-2"></img> */}
      </div>
    </div>
  );
}

export default MainHeader;
