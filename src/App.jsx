import Page from "./components/page";
import {
  WeatherProvider,
  FavoriteProvider,
  LocationProvider,
} from "./provider";

function App() {
  return (
    <>
      <LocationProvider>
        <FavoriteProvider>
          <WeatherProvider>
            <Page />
          </WeatherProvider>
        </FavoriteProvider>
      </LocationProvider>
    </>
  );
}

export default App;
