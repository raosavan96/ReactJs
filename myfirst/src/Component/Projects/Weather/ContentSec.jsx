import React from "react";
import WeatherCss from "./Weather.module.css";
import MoonImg from "./images/sun.png";
import Details from "./Details";

function ContentSec() {
  return (
    <>
      <div className={`${WeatherCss.main_content_box} h-full`}>
        <div className={`${WeatherCss.input_sec}`}>
          <input
            type="text"
            placeholder="Search for cities"
            className="outline-none py-2 px-3 bg-none w-full bg-transparent"
          ></input>
        </div>
        <div className={`${WeatherCss.city_sun_moon} px-10`}>
          <div className="row">
            <div className={`${WeatherCss.city_temp} col-6`}>
              <h1 className="mt-4 text-4xl font-bold">Jaipur</h1>
              <p className="text-xs mt-3">Chance of rain: 0%</p>

              <div>
                <h1 className="text-6xl font-bold mt-5">31 &deg;</h1>
              </div>
            </div>
            <div
              className={`${WeatherCss.moon_sun} col-6 flex items-center justify-center`}
            >
              <img src={MoonImg} />
            </div>
          </div>
        </div>
        <div
          className={`${WeatherCss.weather_details_sec} py-3 w-full px-4 pt-4 pb-5`}
        >
          <h5 className={WeatherCss.details_hed}>Weather Details</h5>
          <div className="row">
            <Details />
            <Details />
            <Details />
          </div>
          <div className="row mt-4">
            <Details />
            <Details />
            <Details />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSec;
