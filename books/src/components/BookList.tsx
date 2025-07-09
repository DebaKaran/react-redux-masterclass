import React from "react";
import type { Book } from "../types/Book";
import BookShow from "./BookShow";

interface BookListProps {
  books: Book[];
}
const BookList: React.FC<BookListProps> = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
