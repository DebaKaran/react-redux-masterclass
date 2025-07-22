import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";
import SelectedPlace from "./components/SelectedPlace";

function App() {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (title: string) => {
    setSearchTitle(title);
  };

  return (
    <>
      <SearchPlace onSearch={handleSearch} />
      <SelectedPlace />
      {searchTitle}
    </>
  );
}

export default App;
