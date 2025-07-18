import { useState } from "react";

const Player = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("Welcome unknown entity");

  const handleClick = () => {
    setContent(`Welcome ${name}`);
    setName("");
  };

  return (
    <section id="player">
      <h2>{content}</h2>
      <p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
