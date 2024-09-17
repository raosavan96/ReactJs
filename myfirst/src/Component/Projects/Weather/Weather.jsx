import React from "react";
import WeatherCss from "./Weather.module.css";
import AsideSec from "./AsideSec";
import ContentSec from "./ContentSec";

function Weather() {
  return (
    <>
      <div className={`${WeatherCss.weather_container} overflow-hidden`}>
        <div className={WeatherCss.weather_box}>
          <div
            className={`flex justify-between  h-full ${WeatherCss.main_box}`}
          >
            <AsideSec />
            <ContentSec />
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
