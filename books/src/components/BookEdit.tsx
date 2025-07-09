import React, { useState } from "react";
import type { Book } from "../types/Book";

interface BookEditProps {
  book: Book;
  onEdit: (id: number, title: string) => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
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
