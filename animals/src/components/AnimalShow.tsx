import React, { useState } from "react";

// interface AnimalShowProps {
//   animal: string;
// }

const getRandomAnimal = (): string => {
  const animals: string[] = ["bird", "cat", "cow", "dog", "gator", "horse"];

  const randomNum: number = Math.floor(Math.random() * animals.length);

  return animals[randomNum];
};

const AnimalShow = () => {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleOnClick = () => {
    const animal = getRandomAnimal();
    setAnimals([...animals, animal]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <div key={index}>{animal}</div>
  ));

  return (
    <>
      <button onClick={handleOnClick}>Add Animal</button>
      {renderedAnimals}
    </>
  );
};

export default AnimalShow;
