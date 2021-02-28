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
        <h1 className="col-8"> <i className="fas fa-map-marker-alt"></i> {displayCity} </h1>
        <div className="buttons col-4">
              <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="fas fa-search"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li className="dropdown-item">
                                 <form onSubmit={handleSubmit} className="search-bar">
                                    <input
                                        type="search"
                                        placeholder="Type a city here"
                                        onChange={changeCity}/>
                                    <input type="submit" className="search-button" value= "Search"></input>
                                  </form>
                        </li>
                        <li className="dropdown-item">
                            Farenheit
                        </li>
                        <li className="dropdown-item">
                            Celsius
                        </li>
                    </ul>
                </div>
            </div>
    </header>
  );
}
