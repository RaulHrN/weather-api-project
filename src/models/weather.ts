export interface ResponseWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

interface Current {
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
  weather: Weather;
}

interface Hourly {
  baseInfo: BaseInfo;
  temp: number;
  feels_like: number;
  visibility: number;
}

interface Daily {
  baseInfo: BaseInfo;
  temp: Temp;
  feels_like: FeelsLike;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
}

interface BaseInfo {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather;
  pop: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
