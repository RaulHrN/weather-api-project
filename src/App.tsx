import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Hourly } from "./pages/hourly/Hourly";
import { Daily } from "./pages/daily/Daily";
import {WeatherProvider} from "./provider/WeatherContext";

function App() {
  const headerHeight = "5rem";

  return (
    <div className="App">
      <WeatherProvider>
      <Header />
      <div style={{height:`calc(100vh - ${headerHeight})`, overflow: "auto"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hourly" element={<Hourly />}></Route>
          <Route path="/daily" element={<Daily />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
