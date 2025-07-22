import React from "react";
import type { SearchResultPlaceProps } from "../types/AvailablePlace";

const SearchResultPlace: React.FC<SearchResultPlaceProps> = ({
  place,
  onSelectPlace,
  isSelected,
}) => {
  const handleOnSelectPlace = () => {
    onSelectPlace(place);
  };
  return (
    <div>
      //Use conditional styling inside Place.tsx
      <li className={`place-item ${isSelected ? "selected" : ""}`}>
        <button onClick={handleOnSelectPlace}>
          <img src={place.image.src} alt={place.image.alt} />
          <h3>{place.title}</h3>
        </button>
      </li>
    </div>
  );
};

export default SearchResultPlace;
