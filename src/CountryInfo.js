import React from "react";

const CountryInfo = ({ name, population, region, capital }) => {
  
  return (
    <ul>
      <li>{name}</li>
      <li><b>Region</b>: {region}</li>
      <li><b>Population</b>: {population} </li>
      <li><b>Capital</b>: {capital}</li>
    </ul>
  );
};

export default CountryInfo;
