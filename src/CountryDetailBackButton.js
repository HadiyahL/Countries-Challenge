import React from "react";

const CountryDetailBackButton = ({setIsHomePage}) => {
const handleClick = () =>{
    setIsHomePage(true);
}

  return (
    <div>
      <button className='backBtn' onClick={handleClick}>Back</button>
    </div>
  );
};

export default CountryDetailBackButton;
