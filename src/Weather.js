import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [displayCity, setDisplayCity] = useState("");
  const [todayDescription, setTodayDescription]=useState("");
const apiKey="2ab0b590fd9866ef804df5849d5ef74a";
  const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  function handleSubmit(event) {
  event.preventDefault();
  axios.get(apiUrl).then(apiCity);
  }
  function apiCity(response){
 console.log(response);
 setDisplayCity(response.data.main.name);
 setTodayDescription(response.data.main.weather[0].main);
 
 const forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
 axios.get(forecastUrl).then(displayForecast);
  }
  function displayForecast(response){
      console.log(response);

  }
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="weather">
    <header className="search row">
        <div className="col-8 city-bar">
        <h1> <i className="fas fa-map-marker-alt"></i> {displayCity} </h1>
        <button className="celsius-button unit-button">°C | </button>
        <button className="farenheit-button unit-button">°F</button>
        </div>
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
                    </ul>
                </div>
            </div>
    </header>
    <main>
    <div className="forecast">
            <div className="today what-day row">
                <div className="row-visible row">
                    <div className="col-7">
                        <h2>
                             {todayDescription}
                         </h2>
                    </div>
                    <div className="col-5">
                        <h2>Today</h2>
                    </div>
                </div>
        <div className="row-invisible row">
            <div className="icon col-7">
                <h4>🍕</h4>
            </div>
            <div className="weather-info col-5">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
    </div>
        <div className="tomorrow what-day row">
                <div className="row-visible row">
                    <div className="col-7">
                        <h2>
                             Description
                         </h2>
                    </div>
                    <div className="col-5">
                        <h2>Tomorrow</h2>
                    </div>
                </div>
        <div className="row-invisible row">
            <div className="icon col-7">
                <h4>🍕</h4>
            </div>
            <div className="weather-info col-5">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
    </div>
         <div className="day-after-tomorrow what-day row">
                <div className="row-visible row">
                    <div className="col-7">
                        <h2>
                             Description
                         </h2>
                    </div>
                    <div className="col-5">
                        <h2>Day After Tomorrow</h2>
                    </div>
                </div>
        <div className="row-invisible row">
            <div className="icon col-7">
                <h4>🍕</h4>
            </div>
            <div className="weather-info col-5">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
    </div>
         <div className="day-after-that what-day row">
                <div className="row-visible row">
                    <div className="col-7">
                        <h2>
                             Description
                         </h2>
                    </div>
                    <div className="col-5">
                        <h2>Day After That</h2>
                    </div>
                </div>
        <div className="row-invisible row">
            <div className="icon col-7">
                <h4>🍕</h4>
            </div>
            <div className="weather-info col-5">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
    </div>
 </div>
 </main>
 </div>
  );
}
