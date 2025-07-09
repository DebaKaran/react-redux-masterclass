import { useState } from "react";
import "./App.css";
import { fetchImages, type UnsplashImage } from "./api/unsplash-api";
import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchTerm: string) => {
    const loadImages = async () => {
      try {
        setLoading(true); // Show spinner
        const fetchedImages: UnsplashImage[] = await fetchImages(searchTerm);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Hide spinner
      }
    };

    loadImages();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loader /> : <ImageCard images={images} />}
    </>
  );
}

export default App;
