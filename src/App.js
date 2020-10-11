import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import Country from "./Country";
import FilterByRegion from "./FilterByRegion";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [countries] = useState(countriesAll);
  const [countriesDisplay, setCountriesDisplay] = useState(countriesAll);
 
  return (
    <div className="App">
      <SearchBar countries={countries} setCountriesDisplay={setCountriesDisplay}/>
      <FilterByRegion
        countries={countries}
        setCountriesDisplay={setCountriesDisplay}
      />
      <div className="countries-container">
        {countriesDisplay.map((country) => {
          return <Country key={country.name} details={country} />;
        })}
        {/* {filteredCountries.length === 0 && (
          <h3>No such country found, please enter a correct country name</h3>
        )} */}
        ;
      </div>
    </div>
  );
}

export default App;
