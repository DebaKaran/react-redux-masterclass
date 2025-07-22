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

export interface SelectedProps {
  selectedId: string;
  selectedTitle: string;
  selectPlaceHandler: (selectedId: string, selectedTitle: string) => void;
}
