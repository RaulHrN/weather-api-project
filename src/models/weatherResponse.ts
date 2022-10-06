//usar dentro do provider
export interface ResponseWeatherApi {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
  current: ResponseCurrent;
  hourly: ResponseHourly[];
  daily: ResponseDaily[];
}

export interface ResponseCurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: ResponseWeather;
}

export interface ResponseHourly extends ResponseBaseInfo {
  temp: number;
  feels_like: number;
  visibility: number;
}

export interface ResponseDaily extends ResponseBaseInfo {
  temp: ResponseTemp;
  feels_like: ResponseFeelsLike;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
}

export interface ResponseBaseInfo {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: ResponseWeather[];
  pop: number;
}

export interface ResponseWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ResponseTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ResponseFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
