import React from "react";
import WeatherCss from "./Weather.module.css";

function Details({
  weather,
  weather2,
  weather3,
  weather4,
  weather5,
  weather6,
  wName1,
  wName2,
  wName3,
  wName4,
  wName5,
  wName6
}) {
  return (
    <div className={`col-4 ${WeatherCss.someClass}`}>
      <div className="flex">
        <div className="flex mt-3">
          <div className={`${WeatherCss.mini_details} me-2`}>
            <p>
              <i
                className={`${wName1?.icon1} ${wName2?.icon2} ${wName3?.icon3} ${wName4?.icon4} ${wName5?.icon4} ${wName6?.icon5}`}
              ></i>
            </p>
          </div>
          <div className={WeatherCss.mini_details}>
            <p>
              {wName1?.wName1}
              {wName2?.wName2}
              {wName3?.wName3} {wName4?.wName4}
              {wName5?.wName5}
              {wName6?.wName6}
            </p>
            <h5>
              {weather?.wind.speed} {weather2?.main.temp} {weather3?.visibility}
              {weather4?.coord.lat}
              {weather5?.coord.lon} {weather6?.main.humidity}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
