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

// export interface SelectedPlaceProps {
//   selectedId: string;
//   selectedTitle: string;
//   selectPlaceHandler: (selectedId: string, selectedTitle: string) => void;
// }

export interface PlaceProp {
  place: AvailablePlace;
  onSelectPlace: (place: AvailablePlace) => void;
  isSelected: boolean;
}

//Since in the Places, we have defined place as AvailablePlace | null
export interface PlacesProps {
  place: AvailablePlace | null; // Optional
  onSelectPlace: (place: AvailablePlace) => void;
}

export interface SearchResultPlaceProps {
  place: AvailablePlace;
  onSelectPlace: (place: AvailablePlace) => void;
  isSelected: boolean;
}

export interface SelectedSearchPlaceProps {
  searchTitle: string;
}

export interface SearchFilterProps {
  searchTerm: string;
  onSelectPlace: (place: AvailablePlace) => void;
  place: AvailablePlace | null;
}
