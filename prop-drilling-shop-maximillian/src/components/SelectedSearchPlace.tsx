import { useState } from "react";
import type {
  AvailablePlace,
  SelectedSearchPlaceProps,
} from "../types/AvailablePlace";
import SearchFilter from "./SearchFilter";

const SelectedSearchPlace: React.FC<SelectedSearchPlaceProps> = ({
  searchTitle,
}) => {
  const [selectedPlace, setSelectedPlace] = useState<AvailablePlace | null>(
    null
  );

  const handleOnSelectPlace = (place: AvailablePlace) => {
    setSelectedPlace(place);
  };

  return (
    <div>
      {selectedPlace && (
        <p>Selected in the Search Filter: {selectedPlace?.title}</p>
      )}
      {searchTitle && (
        <SearchFilter
          searchTerm={searchTitle}
          onSelectPlace={handleOnSelectPlace}
          place={selectedPlace}
        />
      )}
    </div>
  );
};

export default SelectedSearchPlace;
