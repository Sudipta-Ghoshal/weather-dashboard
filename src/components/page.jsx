import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";
import { useContext } from "react";
import { WeatherContext } from "../context";

import clearSkyBackground from "../assets/backgrounds/clear-sky.jpg";
import fewCloudsBackground from "../assets/backgrounds/few-clouds.jpg";
import mistBackground from "../assets/backgrounds/mist.jpeg";
import rainyDayBackground from "../assets/backgrounds/rainy-day.jpg";
import snowBackground from "../assets/backgrounds/snow.jpg";
import thunderstormBackground from "../assets/backgrounds/thunderstorm.jpg";
import scatteredCloudsBackground from "../assets/backgrounds/scattered-clouds.jpg";
import showerRainBackground from "../assets/backgrounds/shower-rain.jpg";
import winterBackground from "../assets/backgrounds/winter.jpg";
import sunnyBackground from "../assets/backgrounds/sunny.jpg";

export default function Page() {
  const { weather, loading } = useContext(WeatherContext);

  const background = () => {
    switch (weather.climate) {
      case "Clear":
        return clearSkyBackground;
      case "Clouds":
        return scatteredCloudsBackground;
      case "Mist":
      case "Fog":
      case "Haze":
        return mistBackground;
      case "Rain":
        return rainyDayBackground;
      case "Drizzle":
        return showerRainBackground;
      case "Snow":
        return snowBackground;
      case "Thunderstorm":
        return thunderstormBackground;
      case "Few Clouds":
        return fewCloudsBackground;
      case "Winter":
        return winterBackground;
      case "Sunny":
        return sunnyBackground;
      default:
        return clearSkyBackground;
    }
  };

  return (
    <>
      {loading.isLoading ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
          className="h-screen grid place-items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background()})`,
          }}
        >
          <Header />
          <main className="w-full">
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
