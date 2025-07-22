import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type {
  AvailablePlace,
  SearchFilterProps,
} from "../types/AvailablePlace";
import Place from "./Place";

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSelectPlace,
  place,
}) => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const filteredPlaces: AvailablePlace[] = availablePlaces.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderedFilteredPlaces = filteredPlaces.map((place1) => (
    <Place
      place={place1}
      key={place1.id}
      onSelectPlace={onSelectPlace}
      isSelected={place?.id === place1.id}
    />
  ));
  return (
    <>
      {renderedFilteredPlaces.length == 0 ? (
        <p>No places found for "{searchTerm}".</p>
      ) : (
        <ul className="places">{renderedFilteredPlaces}</ul>
      )}
    </>
  );
};

export default SearchFilter;
