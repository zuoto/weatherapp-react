import React from "react";
import RainImg from "./imgs2/010-rain.svg";
import CloudyImg from "./imgs2/001-cloudy.svg";
export default function NextDays() {
  return (
    <div>
      <div className="row" id="nextDays">
        <div className="col">
          <p>Monday</p>

          <img src={CloudyImg} width="50px" alt="sunny" />

          <br />

          <p className="temp">18°C</p>
        </div>

        <div className="col">
          <p>Tuesday</p>

          <img src={RainImg} width="50px" alt="sunny" />

          <br />

          <p className="temp">18°C</p>
        </div>

        <div className="col">
          <p>Wednesday</p>

          <img src={CloudyImg} width="50px" alt="sunny" />

          <br />

          <p className="temp">18°C</p>
        </div>

        <div className="col">
          <p>Thursday</p>

          <img src={CloudyImg} width="50px" alt="sunny" />

          <br />

          <p className="temp">18°C</p>
        </div>

        <div className="col">
          <p>Friday</p>

          <img src={RainImg} width="50px" alt="sunny" />

          <br />

          <p className="temp">18°C</p>
        </div>
      </div>
    </div>
  );
}
