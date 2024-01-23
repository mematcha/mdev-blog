import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./displayToggle.scss";

function DisplayToggle() {
  const [checkBoxVal, setCheckBoxVal] = useState(()=>{
    const theme=localStorage.getItem("theme");
    if(theme=="dark"){
        return true;
    }
    else{
        return false;
    }
  });
  const { theme, setNewTheme } = useContext(ThemeContext);

  const getCheckBoxValue = () => {
    const value = document.getElementById("modeToggle");
    setCheckBoxVal(value.checked);
  };
  const toggleTheme = (themearg) => {
    const app = document.getElementsByClassName("App")[0];
    setNewTheme(themearg);
    localStorage.setItem("theme", themearg);
    app.setAttribute("theme", themearg);
  };
  useEffect(() => {
    if (checkBoxVal) {
      toggleTheme("dark");
    }
    else{
      toggleTheme("light");
    }
  }, [checkBoxVal]);

  return (
    <div className="slider-container">
      <label className="switch">
        <input
          defaultChecked={checkBoxVal}
          type="checkbox"
          id="modeToggle"
          onClick={getCheckBoxValue}
        ></input>
        <span className="slider round"></span>
      </label>
      {/* <p id="modeText">Light Mode</p> */}
    </div>
  );
}

export default DisplayToggle;
