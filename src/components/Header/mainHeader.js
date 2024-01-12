import "./mainHeader.scss";
import LogoTransparent from "../../assets/Asset 6.svg";
import LogoBlack from "../../assets/logo_v2.svg";
import UserLogoWhite from "../../assets/userLogoDefault.svg";
import { DeviceContext } from "../../DeviceContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

//Header Method
function MainHeader() {
  const deviceContextVal = useContext(DeviceContext);
  const { theme } = useContext(ThemeContext);

  return (
    //Main Header Class
    <div
      className={`text-3xl h-12 p-1 w-[100%]
        ${deviceContextVal === "mobile" ? "px-[5%]" : "px-[10%]"} 
        flex items-center justify-between`}
      style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
    >
      <Link to="/">
        <img src={LogoBlack} alt="logo" className="w-8 h-8"></img>
      </Link>
      <div className="flex font-bold flex-row text-[12px] items-center">
        <Link to="/user">
          <span className="px-2">User</span>
        </Link>
        <span className="px-2 cursor-not-allowed pointer-events-none">
          Series
        </span>
        <Link to="/about-me">
          <span className="px-2">About Me</span>
        </Link>
        <Link to="/other-projects">
          {" "}
          <span className="px-2 cursor-not-allowed pointer-events-none">
            Other Projects
          </span>
        </Link>
        {/* <span className="px-2">Portfolio</span> */}
        {/* <img src={UserLogoWhite} alt="logo" className="w-6 h-6 ml-2"></img> */}
      </div>
    </div>
  );
}

export default MainHeader;
