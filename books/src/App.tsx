import { useState } from "react";
import type { Book } from "./types/Book";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = (title: string) => {
    const newBook: Book = {
      id: books.length + 1,
      title: title.trim(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate addBook={handleAddBook} />
    </div>
  );
}

export default App;
