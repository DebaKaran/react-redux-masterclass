import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type { AvailablePlace, PlacesProps } from "../types/AvailablePlace";
import Place from "./Place";

const Places: React.FC<PlacesProps> = ({ onSelectPlace, place }) => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const renderedAvailablePlaces = availablePlaces.map((place1) => (
    <Place
      key={place1.id}
      place={place1}
      onSelectPlace={onSelectPlace}
      isSelected={place?.id === place1.id}
    />
  ));

  return <ul className="places">{renderedAvailablePlaces}</ul>;
};

export default Places;
