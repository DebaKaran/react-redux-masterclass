import React from "react";
import type { Book } from "../types/Book";

interface BookShowProps {
  book: Book;
}
const BookShow: React.FC<BookShowProps> = ({ book }) => {
  return <div className="book-show">{book.title}</div>;
};

export default BookShow;
