import React from "react";
import type { UnsplashImage } from "../api/unsplash-api";

interface ImageShowProps {
  image: UnsplashImage;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  return (
    <div>
      <img alt={image.alt_description} src={image.urls.small} />
    </div>
  );
};

export default ImageShow;
