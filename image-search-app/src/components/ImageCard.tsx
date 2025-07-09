import React from "react";
import type { UnsplashImage } from "../api/unsplash-api";
import ImageShow from "./ImageShow";

interface ImageCardProps {
  images: UnsplashImage[];
}

const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div>{renderedImages}</div>;
};

export default ImageCard;
