import { DeviceContext } from "../DeviceContext";
import { useContext } from "react";

function MLCard() {
  const deviceContextVal = useContext(DeviceContext);
  console.log(deviceContextVal);

  return (
    <div className="w-[25%] h-96 p-4"></div>
  );
}

export default MLCard;
