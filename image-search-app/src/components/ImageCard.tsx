import React from "react";
import type { UnsplashImage } from "../api/unsplash-api";

interface ImageCardProps {
  images: UnsplashImage[];
}

const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
  return (
    <div>
      {images.map((img) => (
        <p key={img.id}>{img.description}</p>
      ))}
    </div>
  );
};

export default ImageCard;
