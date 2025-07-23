import React, { useCallback, useEffect, useState } from "react";
import type { AvailablePlace } from "../types/AvailablePlace";

interface VisitedPlacesProps {
  place: AvailablePlace | null;
}

const VisitedPlaces: React.FC<VisitedPlacesProps> = ({ place }) => {
  const [toVisit, setToVisit] = useState<AvailablePlace[]>([]);

  const addPlaceToVisitPlaceList = useCallback(() => {
    const alreadyVisitedPlace = toVisit.some(
      (place1) => place?.id === place1.id
    );

    if (!alreadyVisitedPlace) {
      setToVisit((previosVisitedPlace) => [place!, ...previosVisitedPlace]);
    }
  }, [place, toVisit]);

  useEffect(() => {
    if (place) {
      addPlaceToVisitPlaceList();
    }
  }, [place, addPlaceToVisitPlaceList]);

  const renderedVisitedPlaces = toVisit.map((place1) => (
    <li className={`place-item`} key={place1.id}>
      <button>
        <img src={place1.image.src} alt={place1.image.alt} />
        <h3>{place1.title}</h3>
      </button>
    </li>
  ));
  return <ul className="places">{renderedVisitedPlaces}</ul>;
};

export default VisitedPlaces;
