import React from "react";

export default function Forecast(){
    return (
        <div className="forecast">
            <div className="morning time-of-day row">
            <div className="icon col-7">
                <h2>
                    Description
                </h2>
                <h3>🍕</h3>
            </div>
            <div className="weather-info col-5">
                <h2>Morning</h2>
                <h3>Time</h3>
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
       <div className="day time-of-day row">
            <div className="icon col-7">
                <h2>
                    Description
                </h2>
                <h3>🍕</h3>
            </div>
            <div className="weather-info col-5">
                <h2>Day</h2>
                <h3>Time</h3>
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div className="evening time-of-day row">
            <div className="icon col-7">
                     <h2>
                    Description
                </h2>
                <h3>🍕</h3>
            </div>
            <div className="weather-info col-5">
                <h2>Evening</h2>
                <h3>Time</h3>
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div className="night time-of-day row">
            <div className="icon col-7">
                       <h2>
                    Description
                </h2>
                <h3>🍕</h3>
            </div>
            <div className="weather-info col-5">
                <h2>Night</h2>
                <h3>Time</h3>
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
 </div>
    );
}