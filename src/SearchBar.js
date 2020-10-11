import React, { useState, useEffect } from "react";

const SearchBar = ({ countries, setCountriesDisplay }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setCountriesDisplay(filteredCountries);
  }, [countries, searchTerm, setCountriesDisplay]);

  return (
    <input
      type="text"
      className="searchBar"
      placeholder="Search Country..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
