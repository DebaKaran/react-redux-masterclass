import React from "react";
import type { Book } from "../types/bookTypes";
import BookShow from "./BookShow";

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}
const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
