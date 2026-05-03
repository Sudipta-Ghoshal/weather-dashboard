import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export default function WeatherProvider({ children }) {
  const weatherData = useWeather();

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
}
