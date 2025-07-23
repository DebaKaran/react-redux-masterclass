import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";
import SelectedSearchPlace from "./components/SelectedSearchPlace";
import useSelectedPlace from "./hooks/useSelectedPlace";
import VisitedPlaces from "./components/VisitedPlaces";
import AvailablePlaces from "./components/AvailablePlaces";

function App() {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (title: string) => {
    setSearchTitle(title);
  };

  const { selectedPlace, selectPlaceHandler } = useSelectedPlace();

  return (
    <>
      <SearchPlace onSearch={handleSearch} />
      <br />
      <h2>Visited Places</h2>
      <VisitedPlaces place={selectedPlace} />
      <br />
      <h2>Available Places</h2>
      <AvailablePlaces
        onSelectPlace={selectPlaceHandler}
        place={selectedPlace}
      />

      {searchTitle && (
        <p className="search-summary">You searched: {searchTitle}</p>
      )}

      <SelectedSearchPlace searchTitle={searchTitle} />
    </>
  );
}

export default App;
