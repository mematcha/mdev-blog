import { DeviceContext } from "../../DeviceContext";
import { useContext } from "react";

function Footer() {
  
  const deviceContextVal = useContext(DeviceContext);

  return (
    <div
      className={`p-1
                      bottom-0 left-0 w-full 
                      bg-slate-950 shadow 
                      flex items-center justify-center px-12 py-6 ${
                        deviceContextVal === "mobile" ? "text-[8px] hidden" : "text-xs"
                      }`}
    >
      <div className={`text-slate-500/75 flex justify-center ${
                        deviceContextVal === "mobile" ? "flex-col text-center" : "flex-row"
                      }`}>
        <div className={`px-4 ${
                        deviceContextVal === "mobile" ? "py-4" : "py-6"
                      }`}>
          <ul>
            <li className="mb-1">About Me</li>
            <li className="mb-1"> My Other Projects</li>
            <li className="mb-1">Blog Mission</li>
          </ul>
        </div>

        <div className={`px-4  ${
                        deviceContextVal === "mobile" ? "border-y py-4" : "border-x py-6"
                      } border-solid border-gray-500/25`}>
          <ul>
            <li className="mb-1">Want to connect?</li>
            <li className="mb-1">Employer</li>
          </ul>
        </div>
        <div className={`px-4 ${
                        deviceContextVal === "mobile" ? "py-4" : "py-6"
                      }`}>
          <ul>
            <li className="mb-1">Licenses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
