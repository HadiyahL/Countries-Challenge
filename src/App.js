import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import Country from "./Country";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredCountries = countriesAll.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <input
        type="text"
        className="searchBar"
        placeholder="Search Country..."
        onChange={handleChange}
      />
      <div className="countries-container">
        {filteredCountries.map((country) => {
          return <Country key={country.name} details={country} />;
        })}
        {filteredCountries.length === 0 && <h3>No such country found, please enter a correct country name</h3>};
      </div>
    </div>
  );
}

export default App;
