import React from "react";
import { AVAILABLE_PLACES } from "../data/dummy-products";
import type { AvailablePlace } from "../types/AvailablePlace";
import Place from "./Place";

const Places = () => {
  const availablePlaces: AvailablePlace[] = AVAILABLE_PLACES;

  const renderedAvailablePlaces = availablePlaces.map((place) => (
    <Place place={place} />
  ));

  return <ul className="places">{renderedAvailablePlaces}</ul>;
};

export default Places;
