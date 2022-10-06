import {
  ResponseWeatherApi,
  ResponseCurrent,
  ResponseWeather,
  ResponseHourly,
  ResponseBaseInfo,
  ResponseDaily,
  ResponseTemp,
  ResponseFeelsLike,
} from "./weatherResponse";

//usar dentro da aplicação
export interface WeatherApi
  extends Omit<ResponseWeatherApi, "current" | "hourly" | "daily"> {
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

interface Current extends Omit<ResponseCurrent, "dt" | "temp" | "feels_like" | "dew_point" | "wind_speed"> {
  dt: string;
  temp: string;
  feelsLike: string;
  dewPoint: string;
  windSpeed: string;
}

export interface Hourly
  extends Omit<ResponseHourly, "temp" | "feels_like" | "dt" | "dew_point"> {
  dt: string;
  temp: string;
  feelsLike: string;
  dewPoint: string;
}

export interface Daily extends Omit<ResponseDaily, "dt" | "dew_point" | "temp"> {
  dt: string;
  dewPoint: string;
  temp: Temp;
}

interface BaseInfo extends ResponseBaseInfo {}

interface Weather extends ResponseWeather {}

interface Temp {
  day: string;
  min: string;
  max: string;
  night: string;
  eve: string;
  morn: string;
}

interface FeelsLike extends ResponseFeelsLike {}
