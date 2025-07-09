import { useEffect } from "react";
import "./App.css";
import { fetchImages, type UnsplashImage } from "./api/unsplash-api";

function App() {
  useEffect(() => {
    const loadImages = async () => {
      try {
        const images: UnsplashImage[] = await fetchImages("car");
        console.log("Fetched images from API:", images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, []);
  return <>Learn React</>;
}

export default App;
