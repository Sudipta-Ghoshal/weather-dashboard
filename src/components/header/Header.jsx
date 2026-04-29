import Favourite from "./Favourite";
import FavouritesList from "./FavouritesList";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <header class="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav class="container flex items-center justify-between py-6 mx-auto">
        <Logo />

        <div class="flex items-center gap-4 relative">
          <Search />
          <Favourite />
          <FavouritesList />
        </div>
      </nav>
    </header>
  );
}
