import React from "react";
import { svgMap } from "../data/animal-data";
import type { Animal } from "../data/animal-data";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div>
      <img alt={animal} src={svgMap[animal]} />
    </div>
  );
};

export default AnimalCard;
