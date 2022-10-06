import React from "react";
import { Link } from "react-router-dom";
import { Daily, Hourly } from "../../models/weather";
import { CardResume } from "../cardResume/CardResume";
import "./CardBox.css";

interface CardBoxProps {
  hourly?: Hourly[];
  daily?: Daily[];
}

export const CardBox = (weather: CardBoxProps) => {
  const cardType = () => {
    if (weather.hourly) {
      return weather.hourly.slice(0, 5).map((hour, index) => {
        return <CardResume hourly={hour} key={index} />;
      });
    } else if (weather.daily) {
      return weather.daily.slice(0, 5).map((daily, index) => {
        return <CardResume daily={daily} key={index} />;
      });
    } else {
      return <p>Not found</p>;
    }
  };

  return (
    <article className="card_box">
      <div className="card_box-header">
        <p>{weather.daily ? "Daily" : "Hourly"}</p>
        <Link to={weather.daily ? "/daily" : "/hourly"}>See more</Link>
      </div>
      <div className="card_box-body">{cardType()}</div>
    </article>
  );
};
