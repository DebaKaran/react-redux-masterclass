import React, { useState } from "react";
import type { Book } from "../types/bookTypes";
import BookEdit from "./BookEdit";

interface BookShowProps {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}
const BookShow: React.FC<BookShowProps> = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleOnDelete = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    onEdit(id, newTitle); // update state in App
    setShowEdit(false); // close the form
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleOnDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
