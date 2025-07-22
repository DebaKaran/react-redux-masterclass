import { useState } from "react";
import Places from "./Places";

const SelectedPlace = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState("");
  const [title, setTitle] = useState("");
  const [isSeleted, setIsSelected] = useState(false);

  const selectPlaceHandler = (selectedId: string, title: string) => {
    setSelectedPlaceId(selectedId);
    setTitle(title);
    setIsSelected(true);
  };
  const content = `You selected: ${title}`;
  return (
    <>
      <Places
        selectPlaceHandler={selectPlaceHandler}
        selectedId={selectedPlaceId}
        selectedTitle={title}
      />
      <h2>{selectedPlaceId}</h2>
      {isSeleted && <h1>{content}</h1>}
    </>
  );
};

export default SelectedPlace;
