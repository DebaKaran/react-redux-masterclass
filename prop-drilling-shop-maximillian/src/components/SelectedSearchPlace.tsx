import { useState } from "react";
import type {
  AvailablePlace,
  SelectedSearchPlaceProps,
} from "../types/AvailablePlace";
import SearchFilter from "./SearchFilter";
import useSelectedPlace from "../hooks/useSelectedPlace";

const SelectedSearchPlace: React.FC<SelectedSearchPlaceProps> = ({
  searchTitle,
}) => {
  const { selectedPlace, selectPlaceHandler } = useSelectedPlace();
  return (
    <div>
      {selectedPlace && (
        <p>Selected in the Search Filter: {selectedPlace?.title}</p>
      )}
      {searchTitle && (
        <SearchFilter
          searchTerm={searchTitle}
          onSelectPlace={selectPlaceHandler}
          place={selectedPlace}
        />
      )}
    </div>
  );
};

export default SelectedSearchPlace;
