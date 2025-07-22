import type React from "react";
import type { PlaceProp } from "../types/AvailablePlace";

const Place: React.FC<PlaceProp> = ({
  place,
  selectedId,
  selectedTitle,
  selectPlaceHandler,
}) => {
  const handleOnSelect = () => {
    selectPlaceHandler(place.id, place.title);
  };

  return (
    <li className="place-item">
      <button onClick={handleOnSelect}>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
};

export default Place;
