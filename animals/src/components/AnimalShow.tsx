import React, { useState } from "react";
import { svgMap } from "../data/animal-data";
import type { Animal } from "../data/animal-data";
import AnimalCard from "./AnimalCard";

const getRandomAnimal = (): Animal => {
  const keys = Object.keys(svgMap) as Animal[];
  const randomNum: number = Math.floor(Math.random() * keys.length);

  return keys[randomNum];
};

const AnimalShow = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const handleOnClick = () => {
    const animal = getRandomAnimal();
    setAnimals((prev) => [...prev, animal]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalCard key={index} animal={animal} />
  ));

  return (
    <>
      <button type="button" onClick={handleOnClick}>
        Add Animal
      </button>
      {renderedAnimals}
    </>
  );
};

export default AnimalShow;
