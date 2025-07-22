import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";
import SelectedPlace from "./components/SelectedPlace";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (title: string) => {
    setSearchTitle(title);
  };

  return (
    <>
      <SearchPlace onSearch={handleSearch} />
      <SelectedPlace />
      {searchTitle && (
        <p className="search-summary">You searched: {searchTitle}</p>
      )}
      {searchTitle && <SearchFilter searchTerm={searchTitle} />}
    </>
  );
}

export default App;
