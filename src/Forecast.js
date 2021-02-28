import React from "react";

export default function Forecast(){
    return (
        <div className="forecast">
            <div className="today new-day row">
            <div className="far-left col-4">
                <h2>
                    Today
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div className="icon col-4">
                ☔️
            </div>
            <div className="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div className="tomorrow new-day row">
            <div className="far-left col-4">
                <h2>
                    Tomorrow
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div className="icon col-4">
                ☔️
            </div>
            <div className="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div className="day-after-tomorrow new-day row">
            <div className="far-left col-4">
                <h2>
                    Day After Tomorrow
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div className="icon col-4">
                ☔️
            </div>
            <div className="forcast col-4">
                <ul>
                    <li>Temp</li>
                    <li>Description</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
            </div>
        </div>
        <div className="day-after-that new-day row">
            <div className="far-left col-4">
                <h2>
                    Day After That
                </h2>
                <h3>
                    Time
                </h3>
            </div>
            <div className="icon col-4">
                ☔️
            </div>
            <div className="forcast col-4">
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