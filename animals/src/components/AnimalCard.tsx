import React, { useState } from "react";
import { svgMap } from "../data/animal-data";
import type { Animal } from "../data/animal-data";
import heart from "../svg/heart.svg";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };
  return (
    <div onClick={handleClick}>
      <img alt="animal" src={svgMap[animal]} />
      <img alt="heart" src={heart} style={{ width: `${10 + 10 * clicks}px` }} />
    </div>
  );
};

export default AnimalCard;
