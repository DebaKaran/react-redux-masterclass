import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

import {
  fetchBooks as fetchBooksService,
  createBook as createBookService,
  deleteBookById as deleteBookService,
  editBookById as editBookService,
} from "./services/bookService";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await fetchBooksService();
    setBooks(response);
  };

  useEffect(() => {
    fetchBooks();
  }, []); // ← this ensures it runs only once when the component mounts

  const createBook = async (title: string) => {
    const newBook = await createBookService(title);

    setBooks((prev) => [...prev, newBook]);
  };

  const deleteBookById = async (id: number) => {
    await deleteBookService(id);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newtitle: string) => {
    const updatedBook = await editBookService(id, newtitle);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1 className="title">Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate addBook={createBook} />
    </div>
    // <UseEffectPlayground />
  );
}

export default App;
