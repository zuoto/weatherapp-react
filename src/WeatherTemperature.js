import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h1>
        <b>
          <span id="temp">{props.celcius}</span>
        </b>
        <span className="units">
          <a href="#" id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="#" id="farenheit-link" onClick={convertToF}>
            °F
          </a>
        </span>
      </h1>
    );
  }
  if (unit === "farenheit") {
    let ftemp = props.celcius * 1.8 + 32;

    return (
      <h1>
        <b>
          <span id="temp">{Math.round(ftemp)}</span>
        </b>
        <span className="units">
          <a href="#" id="celsius-link" onClick={convertToC}>
            °C
          </a>
          |
          <a href="#" id="farenheit-link" className="active">
            °F
          </a>
        </span>
      </h1>
    );
  }
}
