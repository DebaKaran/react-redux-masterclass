import { useState } from "react";
import "./App.css";
import { fetchImages, type UnsplashImage } from "./api/unsplash-api";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  const handleSearch = (searchTerm: string) => {
    const loadImages = async () => {
      try {
        const fetchedImages: UnsplashImage[] = await fetchImages(searchTerm);
        console.log("Fetched images from API:", fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.map((img) => (
        <p key={img.id}>{img.description}</p>
      ))}
    </>
  );
}

export default App;
