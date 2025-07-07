import React, { useState } from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

type Animal = keyof typeof svgMap;
const keys = Object.keys(svgMap) as Animal[];

const getRandomAnimal = (): Animal => {
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
    <div key={index}>
      <img alt="animal" src={svgMap[animal]} />
    </div>
  ));

  return (
    <>
      <button onClick={handleOnClick}>Add Animal</button>
      {renderedAnimals}
    </>
  );
};

export default AnimalShow;
