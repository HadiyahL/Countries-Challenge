import React from "react";
import { Moon } from "react-feather";

const ToggleDarkModeBtn = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggleBtn" onClick={handleClick}>
      <Moon />
      <span className="toggleText">Dark Mode</span>
    </div>
  );
};

export default ToggleDarkModeBtn;
