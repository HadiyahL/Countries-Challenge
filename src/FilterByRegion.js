import React, { useState, useEffect } from "react";

const FilterByRegion = ({ countries, setCountriesDisplay }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return country.region.toLowerCase() === value.toLowerCase();
    });
    if (value === "" || value === "default") {
      setCountriesDisplay(countries);
    } else {
      setCountriesDisplay(filteredCountries);
    }
  }, [countries, setCountriesDisplay, value]);

  return (
    <select name="regions" id="regions" onChange={handleChange}>
      <option value="default">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
      <option value="polar">Polar</option>
    </select>
  );
};

export default FilterByRegion;
