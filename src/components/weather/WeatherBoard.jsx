import AddToFAvourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeading from "./WeatherHeading";

export default function WeatherBoard() {
  return (
    <div className="container mx-auto">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/14 px-4 lg:px-14 py-6 lg:py-10 min-h-130 max-w-264.5 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFAvourite />
          <WeatherHeading />
          <WeatherCondition />
        </div>
      </div>
    </div>
  );
}
