import React, { useState } from "react";
import WeatherCss from "./Weather.module.css";
import MoonImg from "./images/sun.png";
import Details from "./Details";
import { useWeather } from "./WeatherContext"; // Use the custom hook

function ContentSec() {
  const [weatherData, setWeatherData] = useState();
  const { weather, setWeather } = useWeather(); // Access context using the custom hook

  const detailArray = {
    wName1: "Wind Speed",
    wName2: "Temperature",
    wName3: "Visibility",
    wName4: "Latitude",
    wName5: "Longitude",
    wName6: "Humidity",
    icon1: "fa-solid fa-wind",
    icon2: "fa-solid fa-temperature-low",
    icon3: "fa-solid fa-eye",
    icon4: "fa-solid fa-location-crosshairs",
    icon5: "fa-solid fa-cloud-meatball",
    speed: "m/sec",
    temp: "c",
    km: "km"
  };

  const apiKey = "340791651da63f0d2465805bede445b3";

  function handleCities() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${`${weatherData}`}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={`${WeatherCss.main_content_box} h-full`}>
      <div
        className={`${WeatherCss.input_sec} flex items-center overflow-hidden`}
      >
        <input
          value={weatherData}
          onChange={(e) => setWeatherData(e.target.value)}
          type="search"
          placeholder="Search for cities"
          className="outline-none py-2 px-3 bg-none w-full bg-transparent"
        />
        <button
          onClick={handleCities}
          className={`max-w-xs outline-none text-black font-bold bg-yellow-400 h-full py-2 px-3`}
        >
          Search
        </button>
      </div>
      <div className={`${WeatherCss.city_sun_moon} px-10`}>
        <div className="row">
          <div className={`${WeatherCss.city_temp} col-6`}>
            <h1 className="mt-4 text-4xl font-bold">
              {weather.name || "City"}, {weather.sys && weather.sys.country}
            </h1>
            <p className="text-xs mt-3">
              {weather.weather && weather.weather[0].description}
            </p>
            <div>
              <h1 className="text-6xl font-bold mt-5">
                {weather.main?.temp || "0"}
                &deg;c
              </h1>
            </div>
          </div>
          <div
            className={`${WeatherCss.moon_sun} col-6 flex items-center justify-center`}
          >
            <img
              src={`https://openweathermap.org/img/wn/${
                (weather.weather && weather.weather[0].icon) || `50d`
              }@2x.png`}
              alt="weather-icon"
            />
          </div>
        </div>
      </div>
      <div
        className={`${WeatherCss.weather_details_sec} py-3 w-full px-4 pt-4 pb-5`}
      >
        <h5 className={WeatherCss.details_hed}>Weather Details</h5>
        <div className="row">
          <Details weather={weather} wName1={detailArray} />
          <Details weather2={weather} wName2={detailArray} />
          <Details weather3={weather} wName3={detailArray} />
        </div>
        <div className="row mt-4">
          <Details weather4={weather} wName4={detailArray} />
          <Details weather5={weather} wName5={detailArray} />
          <Details weather6={weather} wName6={detailArray} />
        </div>
      </div>
    </div>
  );
}

export default ContentSec;
