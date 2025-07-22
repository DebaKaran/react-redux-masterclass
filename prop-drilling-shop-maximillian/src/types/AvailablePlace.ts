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

export interface PlaceProp {
  place: AvailablePlace;
  onSelectPlace: (place: AvailablePlace) => void;
  isSelected: boolean;
}

//Since in the Places, it can be either available or not, we have defined place as AvailablePlace | null
export interface PlacesProps {
  place: AvailablePlace | null; // Optional
  onSelectPlace: (place: AvailablePlace) => void;
}

export interface SelectedSearchPlaceProps {
  searchTitle: string;
}

export interface SearchFilterProps {
  searchTerm: string;
  onSelectPlace: (place: AvailablePlace) => void;
  place: AvailablePlace | null;
}
