import React from "react";
import WeatherCss from "./Weather.module.css";
import AsideSec from "./AsideSec";
import ContentSec from "./ContentSec";
import { WeatherProvider } from "./WeatherContext"; // Import the provider

function Weather() {
  return (
    <WeatherProvider>
      <div className={`${WeatherCss.weather_container} overflow-hidden`}>
        <div className={WeatherCss.weather_box}>
          <div className={`flex justify-between h-full ${WeatherCss.main_box}`}>
            <AsideSec />
            <ContentSec />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default Weather;
