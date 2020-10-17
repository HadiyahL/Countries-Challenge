import React from "react";

const CountryDetailInfo = ({ country }) => {
  const getLanguages = country.languages.map((language) => {
    return language.name;
  });

  return (
    <div className="detailedInfo">
      <h1>{country.name}</h1>
      <div className="infoLists">
        <ul className="info info1">
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
        <ul className="info info2">
          <li>
            <b>Top Level Domain</b>: {country.topLevelDomain}
          </li>
          <li>
            <b>Currencies</b>:{" "}
            {country.currencies.map((country) => country.name)}
          </li>
          <li>
            <b>Languages</b>: {getLanguages.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryDetailInfo;
