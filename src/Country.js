import React from "react";
import Flag from "./Flag";
import CountryInfo from "./CountryInfo";

const Country = ({ country, setIsHomePage, setCountryName }) => {
  const handleClick = (event) => {
    setIsHomePage(false)
    setCountryName(country.name)
  };

  return (
    <div className="country" onClick={handleClick}>
      <Flag flag={country.flag} />
      <CountryInfo
        name={country.name}
        region={country.region}
        population={country.population}
        capital={country.capital}
      />
    </div>
  );
};

export default Country;
