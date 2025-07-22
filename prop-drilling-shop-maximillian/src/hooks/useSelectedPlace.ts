import { useState } from "react";
import type { AvailablePlace } from "../types/AvailablePlace";

const useSelectedPlace = () => {
  const [selectedPlace, setSelectedPlace] = useState<AvailablePlace | null>(
    null
  );

  const selectPlaceHandler = (place: AvailablePlace) => {
    setSelectedPlace(place);
  };

  return {
    selectedPlace,
    selectPlaceHandler,
  };
};

export default useSelectedPlace;
