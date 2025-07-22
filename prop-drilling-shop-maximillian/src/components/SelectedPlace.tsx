import Places from "./Places";
import useSelectedPlace from "../hooks/useSelectedPlace";

const SelectedPlace = () => {
  const { selectedPlace, selectPlaceHandler } = useSelectedPlace();

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
