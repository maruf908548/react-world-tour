import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  // const passWithParams = () => {
  //   handleVisitedCountry(country);
  // };

  // console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />

      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        country={country}
      ></CountryDetail>
    </div>
  );
};

export default Country;
