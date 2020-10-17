import React from "react";
import { ArrowLeft } from "react-feather";

const CountryDetailBackButton = ({ setIsHomePage }) => {
  const handleClick = () => {
    setIsHomePage(true);
  };

  return (
    <div className="iconBtn">
      <button className="backBtn" onClick={handleClick}>
        {" "}
        <ArrowLeft className="icon" /> Back
      </button>
    </div>
  );
};

export default CountryDetailBackButton;
