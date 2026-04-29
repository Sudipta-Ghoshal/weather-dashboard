import cloudIcon from "../../assets/cloud.svg";
import pinIcon from "../../assets/pin.svg";

export default function WeatherHeading() {
  return (
    <div>
      <div class="max-md:flex items-center justify-between md:-mt-10">
        <img src={cloudIcon} alt="cloud" />
        <div class="max-md:flex items-center max-md:space-x-4">
          <h1 class="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            16°
          </h1>
          <div class="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="location" />
            <h2 class="text-2xl lg:text-[50px]">Dhaka</h2>
          </div>
        </div>
      </div>
      <p class="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
    </div>
  );
}
