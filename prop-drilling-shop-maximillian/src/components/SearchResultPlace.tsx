import React from "react";
import type { PlaceProp } from "../types/AvailablePlace";

const SearchResultPlace: React.FC<PlaceProp> = ({ place }) => {
  return (
    <div>
      <li className="place-item">
        <button>
          <img src={place.image.src} alt={place.image.alt} />
          <h3>{place.title}</h3>
        </button>
      </li>
    </div>
  );
};

export default SearchResultPlace;
