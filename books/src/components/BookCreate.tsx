import React, { useState } from "react";
import type { Book } from "../types/Book";

interface BookCreateProps {
  numberOfBooks: number;
  addBook: (book: Book) => void;
}

const BookCreate: React.FC<BookCreateProps> = ({ numberOfBooks, addBook }) => {
  const [title, setTitle] = useState("");

  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Prevent Adding Empty Titles
    if (!title.trim()) return;

    const newBook: Book = {
      id: numberOfBooks + 1,
      title: title.trim(),
    };

    addBook(newBook);
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
