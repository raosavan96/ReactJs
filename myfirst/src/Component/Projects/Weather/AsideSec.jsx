import React from "react";
import "./Weather.css";
import UmbrellPng from "./images/umbrella.png";

function AsideSec() {
  return (
    <>
      <div className={`aside_sec flex justify-center py-3`}>
        <div className={`umbrela`}>
          <img src={UmbrellPng} />
        </div>

        <div
          className={`mt-4 flex justify-center items-center flex-col mode_css`}
        >
          <div className="toggle-container">
            <input type="checkbox" id="toggle" className="toggle-checkbox" />
            <label for="toggle" className="toggle-label">
              <span className="toggle-circle"></span>
            </label>
          </div>
          <p className={`mode`}>Mode</p>
        </div>
      </div>
    </>
  );
}

export default AsideSec;
