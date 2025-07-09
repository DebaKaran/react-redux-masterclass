import { useState } from "react";
import type { Book } from "./types/Book";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = (book: Book) => {
    setBooks((prev) => [...prev, book]);
  };

  return (
    <>
      <BookCreate numberOfBooks={books.length} addBook={handleAddBook} />
      {books.map((book) => (
        <div key={book.id}>
          {book.id}, {book.title}
        </div>
      ))}
    </>
  );
}

export default App;
