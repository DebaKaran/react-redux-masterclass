import { useState } from "react";
import type { Book } from "./types/Book";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = (title: string) => {
    const newBook: Book = {
      id: books.length + 1,
      title: title.trim(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <>
      <BookCreate addBook={handleAddBook} />
      {books.map((book) => (
        <div key={book.id}>
          {book.id}, {book.title}
        </div>
      ))}
    </>
  );
}

export default App;
