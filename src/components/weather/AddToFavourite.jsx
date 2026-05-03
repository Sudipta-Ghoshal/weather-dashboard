import { useContext } from "react";
import heartIcon from "../../assets/heart.svg";
import heartRed from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFAvourite() {
  const { favourites, handleAddToFavourite, removeFromFavourite } =
    useContext(FavoriteContext);

  const { weather } = useContext(WeatherContext);

  const { longitude, latitude, location } = weather;

  const isFavourite = favourites.some((fav) => fav.location === location);

  function handleToggleFav() {
    if (!isFavourite) {
      handleAddToFavourite(longitude, latitude, location);
    } else {
      removeFromFavourite(location);
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleToggleFav}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? heartRed : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
