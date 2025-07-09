import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "#36d7b7" }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
