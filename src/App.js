import React from "react";
import countriesAll from "./countriesAll.json";
import Country from './Country';
import "./App.css";

function App() {
  return (
    <div className="App">
        {countriesAll.map((country)=> {
           return <Country key={country.name} details={country}/>
        })}
      
    </div>
  );
}

export default App;
