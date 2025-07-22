import React, { useState } from "react";

interface SearchPlaceProps {
  onSearch: (title: string) => void;
}
const SearchPlace: React.FC<SearchPlaceProps> = ({ onSearch }) => {
  const [title, setTitle] = useState("");

  const handleSearchTitle = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(title);
  };
  return (
    <form onSubmit={handleSearchTitle}>
      <input
        type="text"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event?.target.value)
        }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPlace;
