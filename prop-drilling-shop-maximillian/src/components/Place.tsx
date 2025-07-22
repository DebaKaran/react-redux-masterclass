import type React from "react";
import type { AvailablePlace } from "../types/AvailablePlace";

interface PlaceProp {
  place: AvailablePlace;
  selectedId: string;
  selectedTitle: string;
  selectPlaceHandler: (selectedId: string, selectedTitle: string) => void;
}

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
