/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useWeather } from "../../provider/WeatherContext";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import "./Home.css";
import { InfoLine } from "../../components/infoLine/InfoLine";
import { CardBox } from "../../components/cardBox/CardBox";
import { WeatherApi } from "../../models/weather";
import { Temperature } from "../../components/customComponents/CustomComponents";

export const Home = () => {
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
      {currentWeather ? (
        <>
          <article className="today-card">
            <div className="today_resume-info">
              <h3>
                Weather today in {currentWeather.timezone} -{" "}
                {currentWeather.current.dt}
              </h3>
              <Temperature text={currentWeather.current.temp} size="Large"/>
              <div className="today_max-min">
                <DeviceThermostatIcon />
                <p className="today_max">
                  {currentWeather.daily[0].temp.max}°C /
                </p>
                <p className="today_min">
                  {currentWeather.daily[0].temp.min}°C
                </p>
              </div>
              <p className="today_feels-like">
                Feels like {currentWeather.current.feelsLike}ºC
              </p>
            </div>
            <div className="today_info">
              <InfoLine
                image="https://img.icons8.com/material-sharp/24/000000/humidity.png"
                title="Humidity"
                value={currentWeather.current.humidity}
                valueType="%"
              />
              <InfoLine
                image="https://img.icons8.com/ios-glyphs/30/000000/air-element--v1.png"
                title="Wind"
                value={currentWeather.current.windSpeed}
                valueType="Km/H"
              />
              <InfoLine
                image="https://img.icons8.com/sf-black/64/000000/summer.png"
                title="UV Index"
                value={currentWeather.current.uvi}
                valueType="/ 10"
              />
              {/*Multiplicar por 10 depois*/}
              <InfoLine
                image="https://img.icons8.com/windows/32/000000/heavy-rain.png"
                title="Rain"
                value={currentWeather.current.dewPoint}
                valueType="%"
              />
              <InfoLine
                image="https://img.icons8.com/ios-glyphs/30/000000/atmospheric-pressure--v2.png"
                title="Pressure"
                value={currentWeather.current.pressure}
                valueType="Mb"
              />
            </div>
          </article>
          <CardBox hourly={currentWeather.hourly} />
          <CardBox daily={currentWeather.daily} />
        </>
      ) : (
        <p>Loanding...</p> //transformar em loading
      )}
      <footer>
        Copyright© <span>Climatik</span> 2022
      </footer>
    </section>
  );
};
