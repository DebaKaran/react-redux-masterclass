import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(term);
    }
  };

  return (
    <div>
      <label> Search Term</label>
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleOnKeyDown}
        value={term}
      />
    </div>
  );
};

export default SearchBar;
