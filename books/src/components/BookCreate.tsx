import React, { useState } from "react";
import { useBooks } from "../context/bookContext";

const BookCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Prevent Adding Empty Titles
    if (!title.trim()) return;
    createBook(title);
    setTitle(""); // Add this after addBook(newBook)
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="enter-title">Enter Title</label>
        <input
          className="input"
          id="enter-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
