import React from "react";

const CountryInfo = ({ name, population, region, capital }) => {
  
  return (
    <ul>
      <li>{name}</li>
      <li>Region: {region}</li>
      <li>Population: {population} </li>
      <li>Capital: {capital}</li>
    </ul>
  );
};

export default CountryInfo;
