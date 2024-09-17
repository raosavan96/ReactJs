import React from "react";
import WeatherCss from "./Weather.module.css";
import UmbrellPng from "./images/umbrella.png";

function AsideSec() {
  return (
    <>
      <div className={`${WeatherCss.aside_sec} flex justify-center py-3`}>
        <div className={WeatherCss.umbrela}>
          <img src={UmbrellPng} />
        </div>

        <div className={`mt-4 flex justify-center items-center flex-col ${WeatherCss.mode_css}`}>
          <div className="toggle-container">
            <input type="checkbox" id="toggle" className="toggle-checkbox" />
            <label for="toggle" className="toggle-label">
              <span className="toggle-circle"></span>
            </label>
          </div>
          <p className={WeatherCss.mode}>Mode</p>
        </div>
      </div>
    </>
  );
}

export default AsideSec;
