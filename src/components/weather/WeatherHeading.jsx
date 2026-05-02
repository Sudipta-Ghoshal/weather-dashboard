import { useContext } from "react";
import pinIcon from "../../assets/pin.svg";
import WeatherContext from "../../context";
import dateFormatter from "../../utils/dateFormat-utils";

import cloudIcon from "../../assets/icons/cloud.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import rainyIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";
import hazeIcon from "../../assets/haze.svg";

export default function WeatherHeading() {
  const { weather } = useContext(WeatherContext);

  const { climate, temperature, location, time } = weather;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Clouds":
        return cloudIcon;
      case "Snow":
        return snowIcon;
      case "Clear":
      case "Sunny":
        return sunnyIcon;
      case "Rain":
        return rainyIcon;
      case "Thunderstorm":
        return thunderIcon;
      case "Haze":
      case "Mist":
      case "Fog":
        return hazeIcon;
      default:
        return sunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between">
        <img src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="location" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {dateFormatter(time, "time", false)} -{" "}
        {dateFormatter(time, "date", false)}
      </p>
    </div>
  );
}
