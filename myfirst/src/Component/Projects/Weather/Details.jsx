import React from "react";
import WeatherCss from "./Weather.module.css";

function Details() {
  return (
    <>
      <div className="col-4 ">
        <div className="flex">
          <div className="flex mt-3">
            <div className={`${WeatherCss.mini_details} me-2`}>
              <p>
                <i class="fa-solid fa-wind"></i>
              </p>
            </div>
            <div className={WeatherCss.mini_details}>
              <p>Wind</p>
              <h5>0.2 km/h</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
