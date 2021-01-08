import React, { useState } from "react";
import RainImg from "./imgs2/010-rain.svg";
import axios from "axios";

export default function FirstRow(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Thursday 5:00",
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="row" id="firstRow">
          <div className="col-5" id="weatherInfo">
            <ul>
              <li id="time">{weatherData.date}</li>
              <li>
                <h1 id="city">{weatherData.city}</h1>
              </li>

              <li>
                <h1>
                  <b>
                    <span id="temp">{weatherData.temp}</span>
                  </b>
                  <span className="units">
                    <a href="#" id="celsius-link" className="active">
                      °C
                    </a>
                    |
                    <a href="#" id="farenheit-link">
                      °F
                    </a>
                  </span>
                </h1>
              </li>

              <li id="weatherDescription" className="text-capitalize">
                {weatherData.description}
              </li>

              <li id="wind">Wind: {weatherData.wind} m/s</li>

              <li id="humidity">Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
          <div className="col-7" id="pic">
            <img src={RainImg} id="bigWeatherImage" alt="rainy" />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "59a15f9eb2d8a3d337f3a6cafe49e480";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return "Loading...";
  }
}
