import React, { useState } from "react";
import RainImg from "./imgs2/010-rain.svg";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";
import NextDays from "./nextDays";

export default function FirstRow(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }

  function search() {
    const apiKey = "59a15f9eb2d8a3d337f3a6cafe49e480";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                Type="search"
                className="form-control"
                id="cityTyped"
                autocomplete="off"
                placeholder="Type a city..."
                onChange={handleCityChange}
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn-info">
                Go!
              </button>
            </div>
          </div>
        </form>
        <div className="row" id="firstRow">
          <div className="col-5" id="weatherInfo">
            <ul>
              <li id="time">
                {" "}
                <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li>
                <h1 id="city">{weatherData.city}</h1>
              </li>

              <li>
                <WeatherTemperature celcius={weatherData.temp} />
              </li>

              <li id="weatherDescription" className="text-capitalize">
                {weatherData.description}
              </li>

              <li id="wind">Wind: {weatherData.wind} m/s</li>

              <li id="humidity">Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
          <div className="col-7" id="pic">
            <div className="bigIcon">
              <WeatherIcon code={weatherData.icon} />
            </div>
          </div>
        </div>
        <NextDays city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
