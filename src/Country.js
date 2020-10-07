import React from "react";
import Flag from "./Flag";
import CountryInfo from "./CountryInfo";

const Country = ({ details }) => {
  return (
    <div className="country">
      <Flag flag={details.flag} />
      <CountryInfo
        name={details.name}
        region={details.region}
        population={details.population}
        capital={details.capital}
      />
    </div>
  );
};

export default Country;
