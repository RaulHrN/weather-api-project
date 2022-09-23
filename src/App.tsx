import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { weatherApi } from './services/weatherApi';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Hourly } from "./pages/hourly/Hourly";
import { Daily } from "./pages/daily/Daily";

function App() {
  const getWeatherData = (): void => {
    weatherApi.get("https://api.openweathermap.org/data/2.5/onecall?appid=7d815e88b1e5f18b775c01179d4abd6b&lat=-23.68&lon=-46.51&lang=pt_br&units=metric").then((response) => {
      const weather = response.data;
      console.log(weather)
    })
  }

  getWeatherData();
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/hourly" element={<Hourly/>}></Route>
            <Route path="/daily" element={<Daily/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
