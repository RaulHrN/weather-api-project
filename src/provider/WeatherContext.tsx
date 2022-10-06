import React, { useState } from "react";
import { WeatherApi } from "../models/weather";
import { ResponseWeatherApi } from "../models/weatherResponse";
import { weatherApi } from "../services/weatherApi";

const formatDate = (date: number, type: string): string => {
  let newDate: Date;
   if (type === "current"){
    newDate = new Date(date * 1000);
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
  } else if (type === "hourly"){
    newDate = new Date(date * 1000);
    return(
      newDate.getHours() +
      ":00"
    )
  }else if (type === "daily"){
    newDate = new Date(date * 1000);
    return(
      newDate.getDate() +
      "/" +
      (newDate.getMonth() + 1)
    )
}else {
  return "Data não encontrada";
}
}

type WeatherContext = {
  getWeather: () => void;
  searchWeather: (location: string) => void;
  response: WeatherApi | null;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WeatherContext = React.createContext<WeatherContext>(
  {} as WeatherContext
);

export const WeatherProvider = (props: any) => {
  const [weather, setWeather] = useState<WeatherApi | null>(null);
  //const [searchWeather, setSearchWeather] = useState<string>("");

  const responseWeatherNormalyze = (
    responseWeather: ResponseWeatherApi
    //substituir o underline das Keys da response por CamelCase
  ): WeatherApi => ({
    ...responseWeather,
    current: {
      ...responseWeather.current,
      dt: formatDate(responseWeather.current.dt, "current"),
      temp: responseWeather.current.temp.toFixed(0),
      feelsLike: responseWeather.current.feels_like.toFixed(0),
      dewPoint: responseWeather.current.dew_point.toFixed(0),
      windSpeed: responseWeather.current.wind_speed.toFixed(0)
    },
    hourly: responseWeather.hourly.map((value) => ({
      ...value,
      dt: formatDate(value.dt, "hourly"),
      temp: value.temp.toFixed(0),
      feelsLike: value.feels_like.toFixed(0),
      dewPoint: value.dew_point.toFixed(0)
    })),
    daily: responseWeather.daily.map((value) => ({
      ...value,
      dt: formatDate(value.dt, "daily"),
      temp: {
        day: value.temp.day.toFixed(0),
      max: value.temp.max.toFixed(0),
      min: value.temp.min.toFixed(0),
      night: value.temp.night.toFixed(0),
      eve: value.temp.eve.toFixed(0),
      morn: value.temp.morn.toFixed(0),
      },
      dewPoint: value.dew_point.toFixed(0)
    })),
  });

  const getWeatherData = (): void => {
    weatherApi
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?appid=7d815e88b1e5f18b775c01179d4abd6b&lat=-23.68&lon=-46.51&lang=pt_br&units=metric"
      )
      .then((response) => {
        setWeather(responseWeatherNormalyze(response.data));
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
