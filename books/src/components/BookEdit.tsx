import React, { useState } from "react";
import type { Book } from "../types/bookTypes";

interface BookEditProps {
  book: Book;
  onSubmit: (id: number, title: string) => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleOnChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
