import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°C`;
  }
  return (
    <div className="col">
      {hour()}
      <WeatherIcon code={props.data.weather[0].icon} /> <b>{temperature()}</b>
    </div>
  );
}
