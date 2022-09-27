import React, { useState } from "react";
import { ResponseWeather } from "../models/weather";
import { weatherApi } from "../services/weatherApi";

type WeatherContext = {
  getWeather: () => void;
  searchWeather: (location: string) => void;
  response: ResponseWeather | null;
};

export const WeatherContext = React.createContext<WeatherContext>(
  {} as WeatherContext
);

export const WeatherProvider = (props: any) => {
  const [weather, setWeather] = useState<ResponseWeather | null>(null);
  //const [searchWeather, setSearchWeather] = useState<string>("");

  const getWeatherData = (): void => {
    weatherApi
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?appid=7d815e88b1e5f18b775c01179d4abd6b&lat=-23.68&lon=-46.51&lang=pt_br&units=metric"
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(
          "Error: " + error.response.status + " ," + error.response.data
        );
      });
  };
  const searchWeather = (location: string) => {
    console.log("search");
  };
  return (
    <WeatherContext.Provider
      value={{
        getWeather: () => getWeatherData(),
        searchWeather,
        response: weather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContext =>
  React.useContext(WeatherContext);
