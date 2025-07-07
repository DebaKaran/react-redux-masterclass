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

const getRandomAnimal = (): string => {
  const randomNum: number = Math.floor(
    Math.random() * Object.keys(svgMap).length
  );

  return Object.keys(svgMap)[randomNum];
};

const AnimalShow = () => {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleOnClick = () => {
    const animal = getRandomAnimal();
    setAnimals([...animals, animal]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <div key={index}>
      <img alt="animal" src={svgMap[animal as keyof typeof svgMap]} />
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
