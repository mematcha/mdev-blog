import { useEffect, useState } from "react";
import funnelLogo from "../assets/funnelLogo.svg";
import searchLogo from "../assets/searchLogo.svg";

function MainSearchBlog({ query }) {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Perform your action (e.g., search) here after debounce delay
      console.log('Debounced value:', inputVal);
    }, 1000); // Debounce delay in milliseconds
    
    return () => clearTimeout(timeoutId);
  }, [inputVal]);

  return (
    //Main Header Class
    <div
      className="text-3xl h-12 mb-4
                      bg-slate-100 shadow
                      flex items-center justify-between"
    >
      {/* Logo */}
      <input
        type="text"
        value={inputVal}
        style={{ fontFamily: "Verdana" }}
        className="bg-transparent w-[100%] m-12 ml-6 outline-none text-14 "
        placeholder="Search for blogs to add to this series"
        onChange={(e)=>{
            setInputVal(e.target.value);
        }}
      ></input>
      <div className="flex flex-row justify-end">
        <img src={funnelLogo} className="w-4 h-4 opacity-30 mx-2"></img>
        <img src={searchLogo} className="w-4 h-4 opacity-30 ml-2 mr-4"></img>
      </div>
    </div>
  );
}

export default MainSearchBlog;
