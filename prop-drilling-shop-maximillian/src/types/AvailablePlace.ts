export type AvailablePlace = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
};

export interface SelectedPlaceProps {
  selectedId: string;
  selectedTitle: string;
  selectPlaceHandler: (selectedId: string, selectedTitle: string) => void;
}

export interface PlaceProp extends SelectedPlaceProps {
  place: AvailablePlace;
}

export interface SearchResultPlaceProps {
  place: AvailablePlace;
  onSelectPlace: (place: AvailablePlace) => void;
}
