import React from "react";
import type { Book } from "../types/Book";
import BookShow from "./BookShow";

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
}
const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete}/>;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
