import type { PlacesProps } from "../types/AvailablePlace";
import Places from "./Places";

const AvailablePlaces: React.FC<PlacesProps> = ({ place, onSelectPlace }) => {
  return (
    <>
      <Places onSelectPlace={onSelectPlace} place={place} />
    </>
  );
};

export default AvailablePlaces;
