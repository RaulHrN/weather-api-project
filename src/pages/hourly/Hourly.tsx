import React, { useEffect, useState } from "react";
//import { useLocation } from "react-router";
import {
  RainImg,
  Temperature,
  TitleArticle,
} from "../../components/customComponents/CustomComponents";
import { WeatherApi } from "../../models/weather";
import { useWeather } from "../../provider/WeatherContext";
import "./Hourly.css";

export const Hourly = () => {
  //const location = useLocation();
  const weather = useWeather();
  const [currentWeather, setCurrentWeather] = useState<WeatherApi | null>(null); //if para se for null ou não

  useEffect(() => {
    weather.getWeather();
    weather.searchWeather("");
  }, []);

  useEffect(() => {
    setCurrentWeather(weather.response);
  }, [weather.response]);
  return (
    <section className="page">
      <TitleArticle
        title="Hourly"
        text={
          currentWeather?.current !== undefined
            ? currentWeather?.current.dt
            : "Data não encontrada"
        }
      />

      <section className="main_section">
        <article className="cards_list">
          {currentWeather?.hourly.map((hour, index) => {
            return (
              <div className="card" key={index}>
                <h2>{hour.dt}</h2>
                <div className="climate">
                  <Temperature text={hour.temp} size="Medium" />
                  <span className="feels-like">{hour.feelsLike}°C</span>
                </div>
                <img
                  src={require(`../../assets/images/${hour.weather[0].icon}.png`)}
                  alt={hour.weather[0].main}
                  className="icon"
                ></img>
                <RainImg text={hour.dewPoint} />
              </div>
            );
          })}
        </article>

        <aside className="side_info"></aside>
      </section>
    </section>
  );
};
