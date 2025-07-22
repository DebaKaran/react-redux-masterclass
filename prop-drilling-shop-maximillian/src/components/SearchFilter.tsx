import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type { AvailablePlace } from "../types/AvailablePlace";
import SearchResultPlace from "./SearchResultPlace";

interface SearchFilterProps {
  searchTerm: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm }) => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const filterSearchPlaceSearchPlaces: AvailablePlace[] =
    availablePlaces.filter((place) =>
      place.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  const renderedFilteredPlaces = filterSearchPlaceSearchPlaces.map((place) => (
    <SearchResultPlace place={place} key={place.id} />
  ));
  return <ul className="places">{renderedFilteredPlaces}</ul>;
};

export default SearchFilter;
