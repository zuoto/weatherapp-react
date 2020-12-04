import React from "react";
import RainImg from "./imgs2/010-rain.svg";

export default function firstRow() {
  return (
    <div>
      <div className="row" id="firstRow">
        <div className="col-5" id="weatherInfo">
          <ul>
            <li id="time"></li>
            <li>
              <h1 id="city">Tokyo</h1>
            </li>

            <li>
              <h1>
                <b>
                  <span id="temp">18</span>
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

            <li id="weatherDescription"></li>

            <li id="wind">Wind: 3m/s</li>

            <li id="humidity">Humidity: 87%</li>
          </ul>
        </div>
        <div className="col-7" id="pic">
          <img src={RainImg} id="bigWeatherImage" alt="rainy" />
        </div>
      </div>
    </div>
  );
}
