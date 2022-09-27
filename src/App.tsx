import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Hourly } from "./pages/hourly/Hourly";
import { Daily } from "./pages/daily/Daily";
import {WeatherProvider} from "./provider/WeatherContext";

function App() {

  return (
    <div className="App">
      <WeatherProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hourly" element={<Hourly />}></Route>
          <Route path="/daily" element={<Daily />}></Route>
        </Routes>
      </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;
