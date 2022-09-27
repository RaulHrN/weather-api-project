/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useWeather } from "../../provider/WeatherContext";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import "./Home.css";
import { InfoLine } from "../../components/infoLine/InfoLine";
import { CardBox } from "../../components/cardBox/CardBox";

export const Home = () => {
  const weather = useWeather();

  useEffect(() => {
    weather.getWeather();
    weather.searchWeather("");
  }, []);

  const formatDate = (date: number | undefined): string => {
    if (date === 0 || date === undefined) {
      return "Data não encontrada";
    } else {
      const newDate = new Date(date);
      return (
        newDate.getDate() +
        "/" +
        (newDate.getMonth() + 1) +
        "/" +
        newDate.getFullYear() +
        ", " +
        " " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes()
      );
    }
  };
  return (
    <section className="page">
      <div className="hide">
        <Link to="/hourly">Hourly</Link>
        <Link to="/daily">Daily</Link>
      </div>

      <article className="today-card">
        <div className="today_resume-info">
          <h3>
            Weather today in {weather.response?.timezone} -{" "}
            {formatDate(weather.response?.current.dt)}
          </h3>
          <p className="temperature">
            {weather.response?.current.temp.toFixed(0)}ºC
          </p>
          <div className="today_max-min">
            <DeviceThermostatIcon />
            <p className="today_max">
              {weather.response?.daily[0].temp.max.toFixed(0)}°C /{" "}
            </p>
            <p className="today_min">
              {weather.response?.daily[0].temp.min.toFixed(0)}°C
            </p>
          </div>
          <p className="today_feels-like">
            Feels like {weather.response?.current.feels_like.toFixed(0)}ºC
          </p>
        </div>
        <div className="today_info">
          <InfoLine
            image="https://img.icons8.com/material-sharp/24/000000/humidity.png"
            title="Humidity"
            value={weather.response?.current.humidity}
            valueType="%"
          />
          <InfoLine
            image="https://img.icons8.com/ios-glyphs/30/000000/air-element--v1.png"
            title="Wind"
            value={weather.response?.current.wind_speed}
            valueType="Km/H"
          />
          <InfoLine
            image="https://img.icons8.com/sf-black/64/000000/summer.png"
            title="UV Index"
            value={weather.response?.current.uvi}
            valueType="/ 10"
          />
          {/*Multiplicar por 10 depois*/}
          <InfoLine
            image="https://img.icons8.com/windows/32/000000/heavy-rain.png"
            title="Rain"
            value={weather.response?.current.dew_point}
            valueType="%"
          />
          <InfoLine
            image="https://img.icons8.com/ios-glyphs/30/000000/atmospheric-pressure--v2.png"
            title="Pressure"
            value={weather.response?.current.pressure}
            valueType="Mb"
          />
        </div>
      </article>

      <CardBox/>
      <CardBox/>
    </section>
  );
};
