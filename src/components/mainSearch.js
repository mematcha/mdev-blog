import { useContext, useEffect, useState } from "react";
import funnelLogo from "../assets/funnelLogo.svg";
import searchLogo from "../assets/searchLogo.svg";
import { ThemeContext } from "../ThemeContext";

function MainSearch({query}) {

  const {theme} = useContext(ThemeContext);
  const [inputVal,setInputVal] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      query(inputVal);
    }, 1000); // Debounce delay in milliseconds
    
    return () => clearTimeout(timeoutId);
  }, [inputVal]);

  return (
    //Main Header Class
    <div
      className={`text-3xl h-12 my-12 fixed w-[80%]
      flex items-center justify-between
       ${theme=="dark"?"bg-slate-200 text-black":"bg-slate-100 "}`}
    >
      {/* Logo */}
      <input
        type="text"
        style={{ fontFamily: "Verdana" }}
        className="bg-transparent w-[100%] m-12 ml-6 outline-none text-14"
        placeholder="Search for blogs"
        value={inputVal}
        onChange={(e)=>{setInputVal(e.target.value)}}
      ></input>
      <div className="flex flex-row justify-end">
        {/* <img src={funnelLogo} className='w-4 h-4 opacity-30 mx-2'></img> */}
        {/* <img src={searchLogo} className='w-4 h-4 opacity-30 ml-2 mr-4'></img> */}
      </div>
    </div>
  );
}

export default MainSearch;
