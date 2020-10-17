import React from "react";
import CountryDetailBackButton from "./CountryDetailBackButton";
import Flag from "./Flag";
import CountryDetailInfo from "./CountryDetailInfo";
import BorderCountries from "./BorderCountries";

const CountryDetailPage = ({
  countries,
  countryName,
  setIsHomePage,
  setCountryName,
}) => {
  const [country] = countries.filter((country) => {
    return country.name === countryName;
  });

  return (
    <div className="infoPage">
      <div className="BtnFlag">
        <CountryDetailBackButton setIsHomePage={setIsHomePage} />
        <Flag flag={country.flag} />
      </div>
      <div className='moreInfo'>
        <CountryDetailInfo country={country} />
        <BorderCountries
          countries={countries}
          country={country}
          setCountryName={setCountryName}
        />
      </div>
    </div>
  );
};

export default CountryDetailPage;
