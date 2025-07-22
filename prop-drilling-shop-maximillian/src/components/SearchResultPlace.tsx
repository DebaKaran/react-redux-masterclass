import React from "react";
import type { SearchResultPlaceProps } from "../types/AvailablePlace";

const SearchResultPlace: React.FC<SearchResultPlaceProps> = ({
  place,
  onSelectPlace,
}) => {
  const handleOnSelectPlace = () => {
    onSelectPlace(place);
  };
  return (
    <div>
      <li className="place-item">
        <button onClick={handleOnSelectPlace}>
          <img src={place.image.src} alt={place.image.alt} />
          <h3>{place.title}</h3>
        </button>
      </li>
    </div>
  );
};

export default SearchResultPlace;
