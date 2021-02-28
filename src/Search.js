import React, { useState } from "react";
import bootstrap from "bootstrap";

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
        <h1 className="col-8"> <i class="fas fa-map-marker-alt"></i> {displayCity} </h1>
        <div className="buttons col-4">
              <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="fas fa-search"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                           <a className="dropdown-item" href="#">
                                 <form onSubmit={handleSubmit} className="search-bar">
                                    <input
                                        type="search"
                                        placeholder="Type a city here"
                                        onChange={changeCity}/>
                                    <input type="submit" className="search-button" value= "Search"></input>
                                  </form>
                            </a>
                        </li>
                        <li>
                          <a className="dropdown-item farenheit" href="#">
                            Farenheit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item celsius" href="#">
                            Celsius
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
    </header>
  );
}
