import React, { useState } from "react";

interface BookCreateProps {
  addBook: (title: string) => void;
}

const BookCreate: React.FC<BookCreateProps> = ({ addBook }) => {
  const [title, setTitle] = useState("");

  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Prevent Adding Empty Titles
    if (!title.trim()) return;
    addBook(title);
    setTitle(""); // Add this after addBook(newBook)
  };

  return (
    <div>
      <form onSubmit={handlSubmit}>
        <label htmlFor="enter-title">Enter Title</label>
        <input
          id="enter-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BookCreate;
