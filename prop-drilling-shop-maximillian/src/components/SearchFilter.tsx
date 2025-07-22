import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type { AvailablePlace } from "../types/AvailablePlace";
import SearchResultPlace from "./SearchResultPlace";

interface SearchFilterProps {
  searchTerm: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm }) => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const filteredPlaces: AvailablePlace[] = availablePlaces.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const renderedFilteredPlaces = filteredPlaces.map((place) => (
    <SearchResultPlace place={place} key={place.id} />
  ));
  return renderedFilteredPlaces.length == 0 ? (
    <p>No places found for "{searchTerm}".</p>
  ) : (
    <ul className="places">{renderedFilteredPlaces}</ul>
  );
};

export default SearchFilter;
