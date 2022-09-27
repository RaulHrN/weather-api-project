import React from "react";
import "./CardResume.css";

export const CardResume = () => {
  return (
    <div>
      <p className="title-hour_date"></p>
      <p className="temperature">°C</p>
      <div className="feels-like_max-min"></div>
      <div className="resume_icon"></div>
      <div className="rain">
        <img
          src="https://img.icons8.com/windows/32/000000/heavy-rain.png"
          alt="rain"
        />
        <p>%</p>
      </div>
    </div>
  );
};
