import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type {
  AvailablePlace,
  SelectedPlaceProps,
} from "../types/AvailablePlace";
import Place from "./Place";

const Places: React.FC<SelectedPlaceProps> = ({
  selectedId,
  selectedTitle,
  selectPlaceHandler,
}) => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const renderedAvailablePlaces = availablePlaces.map((place) => (
    <Place
      place={place}
      selectedId={selectedId}
      selectedTitle={selectedTitle}
      selectPlaceHandler={selectPlaceHandler}
    />
  ));

  return <ul className="places">{renderedAvailablePlaces}</ul>;
};

export default Places;
