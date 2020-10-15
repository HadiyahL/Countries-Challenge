import React from "react";
import CountryDetailBackButton from "./CountryDetailBackButton";
import Flag from "./Flag";
import CountryDetailInfo from "./CountryDetailInfo";
import BorderCountries from "./BorderCountries";

const CountryDetailPage = ({ countries, countryName, setIsHomePage, setCountryName }) => {
  const [country] = countries.filter((country) => {
    return country.name === countryName;
  });

  return (
    <div className="infoPage">
      <CountryDetailBackButton setIsHomePage={setIsHomePage} />
      <Flag flag={country.flag} />

      <CountryDetailInfo country={country} />
      <BorderCountries countries={countries} country={country} setCountryName={setCountryName}/>
    </div>
  );
};

export default CountryDetailPage;
