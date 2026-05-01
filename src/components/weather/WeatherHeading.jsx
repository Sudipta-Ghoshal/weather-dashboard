import { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import pinIcon from "../../assets/pin.svg";
import WeatherContext from "../../context";
import dateFormatter from "../../utils/dateFormat-utils";

export default function WeatherHeading() {
  const { weather } = useContext(WeatherContext);
  return (
    <div>
      <div className="max-md:flex items-center justify-between">
        <img src={cloudIcon} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weather.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="location" />
            <h2 className="text-2xl lg:text-[50px]">{weather.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {dateFormatter(weather.time, "time", false)} -{" "}
        {dateFormatter(weather.time, "date", false)}
      </p>
    </div>
  );
}
