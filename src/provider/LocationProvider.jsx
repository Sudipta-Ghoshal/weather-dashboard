import { LocationContext } from "../context";
import { useState } from "react";

export default function LocationProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    id: crypto.randomUUID(),
    location: "",
    longitude: 0,
    latitude: 0,
  });

  return (
    <LocationContext.Provider
      value={{ selectedLocation, setSelectedLocation, searchTerm, setSearchTerm }}
    >
      {children}
    </LocationContext.Provider>
  );
}
