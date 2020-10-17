import React from "react";
import Flag from "./Flag";
import CountryInfo from "./CountryInfo";

const Country = ({ country, setIsHomePage, setCountryName }) => {
  const handleClick = (event) => {
    setIsHomePage(false)
    setCountryName(country.name)
  };

  return (
    <div className="country {darkMode? 'country--darkMode':'country--lightMode'}" onClick={handleClick}>
      <Flag flag={country.flag} />
      <CountryInfo
        name={country.name}
        region={country.region}
        population={country.population.toLocaleString()}
        capital={country.capital}
      />
    </div>
  );
};

export default Country;
