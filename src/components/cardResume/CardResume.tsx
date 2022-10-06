import React, { useEffect } from "react";
import { Daily, Hourly } from "../../models/weather";
import { Temperature } from "../customComponents/CustomComponents";
import "./CardResume.css";

interface CardHourlyProps {
  hourly?: Hourly;
  daily?: Daily;
}

export const CardResume = (props: CardHourlyProps) => {
  const getTypeInfo = () => {
    if (props.hourly) {
      console.log(props.hourly.weather[0].icon);

      return (
        <div className="card_resume">
          <p className="title-hour_date">{props.hourly.dt}</p>
          <Temperature text={props.hourly.temp} size="Medium"/>
          <p className="feels-like_max-min">{props.hourly.feelsLike}°C</p>
          <img
            src={require(`../../assets/images/${props.hourly.weather[0].icon}.png`)}
            alt={props.hourly.weather[0].main}
            className="icon"
          ></img>
          <div className="rain">
            <img
              src="https://img.icons8.com/windows/32/000000/heavy-rain.png"
              alt="rain"
            />
            <p>{props.hourly.dewPoint}%</p>
          </div>
        </div>
      );
    } else if (props.daily) {
      return (
        <div className="card_resume">
          <p className="title-hour_date">{props.daily.dt}</p>
          <Temperature text={props.daily.temp.day} size="Medium"/>
          <div className="feels-like_max-min">
            <p>{props.daily.temp.max}°C/</p>
            <span>{props.daily.temp.min}°C</span>
          </div>
          <img
            src={require(`../../assets/images/${props.daily.weather[0].icon}.png`)}
            alt={props.daily.weather[0].main}
            className="icon"
          ></img>
          <div className="rain">
            <img
              src="https://img.icons8.com/windows/32/000000/heavy-rain.png"
              alt="rain"
            />
            <p>{props.daily.dewPoint}%</p>
          </div>
        </div>
      );
    } else {
      console.log("Information not found");
    }
  };

  useEffect(() => {
    getTypeInfo();
  });
  return <>{getTypeInfo()}</>;
};
