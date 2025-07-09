import React from "react";
import type { Book } from "../types/Book";

interface BookShowProps {
  book: Book;
  onDelete: (id: number) => void;
}
const BookShow: React.FC<BookShowProps> = ({ book, onDelete }) => {
  const handleOnDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleOnDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
