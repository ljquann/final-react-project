import axios from "axios";
import React from "react";
export default function Weather (props){

    function handleResponse(response){
        alert(`The temperature in ${props.city} is ${response.data.main.temp}°C `)
    }
    let apiKey=`2ab0b590fd9866ef804df5849d5ef74a`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return(
        <h2>hello from weather</h2>
    );
}