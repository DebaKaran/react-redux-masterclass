import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";
import SelectedPlace from "./components/SelectedPlace";
import SearchFilter from "./components/SearchFilter";
import type { AvailablePlace } from "./types/AvailablePlace";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<AvailablePlace | null>(
    null
  );

  const handleSearch = (title: string) => {
    setSearchTitle(title);
  };

  const handleOnSelectPlace = (place: AvailablePlace) => {
    setSelectedPlace(place);
  };

  return (
    <>
      <SearchPlace onSearch={handleSearch} />
      <SelectedPlace />
      {searchTitle && (
        <p className="search-summary">You searched: {searchTitle}</p>
      )}
      {searchTitle && (
        <SearchFilter
          searchTerm={searchTitle}
          onSelectPlace={handleOnSelectPlace}
        />
      )}

      {selectedPlace && (
        <p>Selected in the Search Filter: {selectedPlace?.title}</p>
      )}
    </>
  );
}

export default App;
