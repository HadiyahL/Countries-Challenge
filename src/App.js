import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";
import Country from "./Country";
import "./App.css";

import CountryDetailPage from "./CountryDetailPage";

function App() {
  const [countries] = useState(countriesAll);
  const [countriesDisplay, setCountriesDisplay] = useState(countriesAll);
  const [countryName, setCountryName] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div className="App">
      {isHomePage ? (
        <>
          <div className="searchFilter">
            <SearchBar
              countries={countries}
              setCountriesDisplay={setCountriesDisplay}
            />
            <FilterByRegion
              countries={countries}
              setCountriesDisplay={setCountriesDisplay}
            />
          </div>

          <div className="countries-container">
            {countriesDisplay.map((country) => {
              return (
                <Country
                  key={country.name}
                  country={country}
                  setIsHomePage={setIsHomePage}
                  setCountryName={setCountryName}
                />
              );
            })}
          </div>
        </>
      ) : (
        <CountryDetailPage
          countries={countries}
          countryName={countryName}
          setIsHomePage={setIsHomePage}
          setCountryName={setCountryName}
        />
      )}
    </div>
  );
}

export default App;
