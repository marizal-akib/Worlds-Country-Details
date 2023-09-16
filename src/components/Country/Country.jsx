import { useState } from "react";
import "./Country.css";
import CounterDetail from "../Country Detail/CounterDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // const passWithParams = () => handleVisitedCountry(country);
  const { name, flags, population, area, cca3 } = country;
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "indigo" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      {/* <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button> */}
      <br />
      <button className="btn"
        onClick={() => {
          handleVisited();
          handleVisitedCountry(country);
          handleVisitedFlags(country.flags.png);
        }}
      >
        Visited
      </button>
      {visited ? " I have visited this country." : " I want to visit"}
      <br />
      <hr />
      <CounterDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CounterDetail>
    </div>
  );
};

export default Country;
