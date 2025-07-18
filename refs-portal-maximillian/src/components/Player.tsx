import { useRef, useState } from "react";

const Player = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("Welcome unknown entity");

  const handleClick = () => {
    const enteredName = inputRef.current?.value;
    setContent(`Welcome ${enteredName}`);
    if (inputRef.current) {
      inputRef.current.value = ""; // clear the input
    }
  };

  return (
    <section id="player">
      <h2>{content}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
