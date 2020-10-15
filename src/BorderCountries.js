import React from "react";

const BorderCountries = ({ countries, country, setCountryName }) => {
  const borderingCountries = countries
    .filter((currentCountry) => {
      return country.borders.includes(currentCountry.alpha3Code);
    })
    .map((country) => country.name);

  const handleClick = (country) => {
    setCountryName(country);
  };
  return (
    <div>
      <h3>Border Countries:</h3>
      {borderingCountries.map((borderingCountry) => {
        return (
          <button key={borderingCountry} className="borderCountryBtn" onClick={()=>handleClick(borderingCountry)}>
            {borderingCountry}
          </button>
        );
      })}
    </div>
  );
};

export default BorderCountries;
