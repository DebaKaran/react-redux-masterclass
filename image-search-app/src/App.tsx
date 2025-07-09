import { useState } from "react";
import "./App.css";
import { fetchImages, type UnsplashImage } from "./api/unsplash-api";
import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";
import { MESSAGES } from "./messages/messages";

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (searchTerm: string) => {
    const loadImages = async () => {
      try {
        setLoading(true); // Show spinner
        setError(null); // Clear old error
        const fetchedImages: UnsplashImage[] = await fetchImages(searchTerm);
        setImages(fetchedImages);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(MESSAGES.NETWORK_ERROR);
      } finally {
        setLoading(false); // Hide spinner
      }
    };

    loadImages();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <Loader />
      ) : images.length === 0 && !error ? (
        <p>{MESSAGES.NO_RESULTS}</p>
      ) : (
        <ImageCard images={images} />
      )}
    </>
  );
}

export default App;
