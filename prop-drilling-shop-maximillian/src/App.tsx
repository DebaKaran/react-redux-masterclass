import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";
import SelectedPlace from "./components/SelectedPlace";
import SelectedSearchPlace from "./components/SelectedSearchPlace";

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
      <SelectedSearchPlace searchTitle={searchTitle} />
    </>
  );
}

export default App;
