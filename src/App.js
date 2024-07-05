import React, { useEffect, useState } from "react";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './components/Services/WeatherService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "stockkholm" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      try {
        const data = await getFormattedWeatherData({ ...query, units });
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      } catch (error) {
        toast.error("Failed to fetch weather data. Please try again later.");
      }
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    return weather.temp <= threshold ? "from-cyan-700 to-blue-700" : "from-yellow-700 to-orange-700";
  };

      return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-8 bg-gradient-to-br ${formatBackground()} h-screen shadow-xl rounded-lg`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setUnits={setUnits} />
      
      {weather && <TimeAndLocation location={`${weather.name}, ${weather.country}`} />}
      {weather && <TemperatureAndDetails weather={weather} />}

      {weather && (
        <>
          <Forecast title="hourly forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}


<ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;