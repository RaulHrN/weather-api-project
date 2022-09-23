import axios from "axios";

export const weatherApi = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/onecall?appid=7d815e88b1e5f18b775c01179d4abd6b&lat=-23.68&lon=-46.51&lang=pt_br&units=metric"
});
