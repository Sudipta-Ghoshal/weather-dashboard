import { useState } from "react";
import Favourite from "./Favourite";
import FavouritesList from "./FavouritesList";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFevouriteList, setShowFavouriteList] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6 mx-auto">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite
            onToggle={() => setShowFavouriteList(!showFevouriteList)}
          />
          {showFevouriteList && <FavouritesList />}
        </div>
      </nav>
    </header>
  );
}
