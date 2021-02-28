import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [displayCity, setDisplayCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayCity(`${city}`);
  }
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <header className="search row">
         <form onSubmit={handleSubmit} className="search-bar">
            <input
            type="search"
            placeholder="Type a city here"
            onChange={changeCity}
            />
            <input type="submit" className="search-button" value= "Search"></input>
        </form>
        <div className=" row city-and-buttons">
      <h1 className="col-8"> {displayCity} </h1>
      <div className="buttons col-4">
        <button className="farenheit"> °F </button>
        <button className="celsius"> °C </button>
      </div>
      </div>
    </header>
  );
}
