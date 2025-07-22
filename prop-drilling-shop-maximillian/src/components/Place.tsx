import type React from "react";
import type { AvailablePlace } from "../types/AvailablePlace";

interface PlaceProp {
  place: AvailablePlace;
}

const Place: React.FC<PlaceProp> = ({ place }) => {
  return (
    <li className="place-item">
      <button>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
};

export default Place;
