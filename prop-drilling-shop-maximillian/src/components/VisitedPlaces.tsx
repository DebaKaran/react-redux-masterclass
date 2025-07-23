import React, { useEffect, useRef, useState } from "react";
import type { AvailablePlace } from "../types/AvailablePlace";
import type { ConfirmModalHandle } from "./ConfirmModal";
import ConfirmModal from "./ConfirmModal";

interface VisitedPlacesProps {
  place: AvailablePlace | null;
}

const VisitedPlaces: React.FC<VisitedPlacesProps> = ({ place }) => {
  const [toVisit, setToVisit] = useState<AvailablePlace[]>([]);
  const modalRef = useRef<ConfirmModalHandle>(null);
  const [placeToDelete, setPlaceToDelete] = useState<AvailablePlace | null>(
    null
  );

  useEffect(() => {
    if (place && !toVisit.some((p) => p.id === place.id)) {
      setToVisit((prev) => [place, ...prev]);
    }
  }, [place]);

  const handlePlaceClick = (place: AvailablePlace) => {
    setPlaceToDelete(place);
    modalRef.current?.open();
  };

  const handleConfirmDelete = () => {
    if (!placeToDelete) return;

    console.log("Trying to delete:", placeToDelete);

    const updatedList = toVisit.filter(
      (p) => p.id.toString() !== placeToDelete.id.toString()
    );
    console.log("Updated list:", updatedList);

    setToVisit(updatedList);
    setPlaceToDelete(null);
    modalRef.current?.close();
  };

  const renderedVisitedPlaces = toVisit.map((place1) => (
    <li
      className={`place-item`}
      key={place1.id}
      onClick={() => handlePlaceClick(place1)}
    >
      <button>
        <img src={place1.image.src} alt={place1.image.alt} />
        <h3>{place1.title}</h3>
      </button>
    </li>
  ));

  return (
    <>
      {toVisit.length === 0 ? (
        <p>No places visited yet.</p>
      ) : (
        <ul className="places">{renderedVisitedPlaces}</ul>
      )}
      <ConfirmModal ref={modalRef} onConfirm={handleConfirmDelete} />
    </>
  );
};

export default VisitedPlaces;
