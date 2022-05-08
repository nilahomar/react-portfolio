import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext/ThemeContext";
import {MdDarkMode} from 'react-icons/md'
import {IoMdSunny} from 'react-icons/io'
import "./Theme.css";

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    setTheme(!theme);
  }
  return (
    <div className= "container mode">
      <button className="modeIcon" onClick={toggleTheme}>{theme ? <MdDarkMode/> : <IoMdSunny/>}</button>
    </div>
  );
}

export default Theme;
