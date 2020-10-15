import React from "react";

const CountryDetailInfo = ({ country }) => {
  const getLanguages = country.languages.map((language) => {
    return language.name;
  });

  return (
    <div>
      <ul>
        <li>
          <b>Native Name</b>: {country.nativeName}
        </li>
        <li>
          <b>Population</b>: {country.population.toLocaleString()}{" "}
        </li>
        <li>
          <b>Region</b>: {country.region}
        </li>
        <li>
          <b>Sub Region</b>: {country.subregion}
        </li>
        <li>
          <b>Capital</b>: {country.capital}
        </li>
      </ul>
      <ul>
        <li>
          <b>Top Level Domain</b>: {country.topLevelDomain}
        </li>
        <li>
          <b>Currencies</b>: {country.currencies.map((country) => country.name)}
        </li>
        <li><b>Languages</b>: {getLanguages.join(", ")}</li>
      </ul>
    </div>
  );
};

export default CountryDetailInfo;
