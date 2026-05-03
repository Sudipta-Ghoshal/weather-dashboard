import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLoacalStorage";

export default function FavoriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const handleAddToFavourite = (longitude, latitude, location) => {
    const favourite = { longitude, latitude, location };
    setFavourites((prev) => [...prev, favourite]);
  };

  const removeFromFavourite = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location,
    );
    setFavourites(restFavourites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favourites, handleAddToFavourite, removeFromFavourite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
