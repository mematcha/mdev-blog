import { DeviceContext } from "../../DeviceContext";
import { useContext } from "react";

function Footer() {
  
  const { deviceType, role } = useContext(DeviceContext);

  return (
    <div
      className={`p-1
                      bottom-0 left-0 w-full 
                      bg-black shadow 
                      flex items-center justify-center px-12 py-6 ${
                        deviceType === "mobile" ? "text-[8px] hidden" : "text-xs"
                      }`}
    >
      <div className={`text-slate-500/75 flex justify-center ${
                        deviceType === "mobile" ? "flex-col text-center" : "flex-row"
                      }`}>
        <div className={`px-4 ${
                        deviceType === "mobile" ? "py-4" : "py-6"
                      }`}>
          <ul>
            <li className="mb-1 cursor-pointer">About Me</li>
            <li className="mb-1 cursor-pointer"> My Other Projects</li>
            <li className="mb-1 cursor-pointer">Blog Mission</li>
          </ul>
        </div>

        <div className={`px-4  ${
                        deviceType === "mobile" ? "border-y py-4" : "border-x py-6"
                      } border-solid border-gray-500/25`}>
          <ul>
            <li className="mb-1 cursor-pointer">Want to connect?</li>
            <li className="mb-1 cursor-pointer">Employer</li>
          </ul>
        </div>
        <div className={`px-4 ${
                        deviceType === "mobile" ? "py-4" : "py-6"
                      }`}>
          <ul>
            <li className="mb-1 cursor-pointer">Licenses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
