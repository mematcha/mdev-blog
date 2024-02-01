import { useEffect, useState, useContext } from "react";
import funnelLogo from "../assets/funnelLogo.svg";
import searchLogo from "../assets/searchLogo.svg";
import { ThemeContext } from "../ThemeContext";

function MainSearchBlog({ query }) {
  const [inputVal, setInputVal] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Perform your action (e.g., search) here after debounce delay
      query(inputVal);
    }, 1000); // Debounce delay in milliseconds

    return () => clearTimeout(timeoutId);
  }, [inputVal]);

  return (
    //Main Header Class
    <div
      className={`text-3xl h-12 mb-4 bg-slate-100  flex items-center justify-between ${
        theme == "dark" ? "bg-slate-200 text-black dark-shadow" : "bg-slate-100 shadow"
      }`}
    >
      {/* Logo */}
      <input
        type="text"
        value={inputVal}
        style={{ fontFamily: "Verdana" }}
        className="bg-transparent w-[100%] m-12 ml-6 outline-none text-14 "
        placeholder="Search for blogs to add to this series"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default MainSearchBlog;
