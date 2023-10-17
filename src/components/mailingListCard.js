import { DeviceContext } from "../DeviceContext";
import { useContext } from "react";

function MLCard() {
  const deviceContextVal = useContext(DeviceContext);
  console.log(deviceContextVal);

  return (
    <div className="min-w-[250px] w-[30%] h-fit bg-black text-white bg-slate-100 mr-4 my-4">
      <div className="border-4 border-black flex flex-col p-4">
        <span className="text-[20px] font-bold ml-2 py-2">
          Join our Mailing List
        </span>
        <div className="text-[12px] p-2">
          <p>Subscribe to our blog for updates, promotions, and more.</p>
          <input className="w-full py-2 pl-2 my-6 text-black"></input>
          <button type="submit" className="w-full h-12 bg-white text-black font-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default MLCard;
