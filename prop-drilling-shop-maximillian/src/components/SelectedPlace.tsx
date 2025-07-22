import { useState } from "react";
import type { AvailablePlace } from "../types/AvailablePlace";
import Places from "./Places";

const SelectedPlace = () => {
  const [selectedPlace, setSelectedPlace] = useState<AvailablePlace | null>(
    null
  );

  const selectPlaceHandler = (place: AvailablePlace) => {
    setSelectedPlace(place);
  };

  const content = `You selected: ${selectedPlace?.title}`;
  return (
    <>
      <Places onSelectPlace={selectPlaceHandler} place={selectedPlace} />
      <h2>{selectedPlace?.id}</h2>
      {selectedPlace && <h1>{content}</h1>}
    </>
  );
};

export default SelectedPlace;
