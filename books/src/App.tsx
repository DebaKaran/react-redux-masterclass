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

  const editBookById = (id: number, newtitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newtitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate addBook={handleAddBook} />
    </div>
  );
}

export default App;
