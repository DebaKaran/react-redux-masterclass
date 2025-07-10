import { useEffect, useState } from "react";
import type { Book } from "./types/bookTypes";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import {
  fetchBooks as fetchBooksService,
  createBook as createBookService,
  deleteBookById as deleteBookService,
  editBookById as editBookService,
} from "./services/bookService";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchBooks = async () => {
    const result = await fetchBooksService();
    if (result.err) {
      setErrorMsg(result.err);
    } else {
      setBooks(result.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []); // ← this ensures it runs only once when the component mounts

  const createBook = async (title: string) => {
    const result = await createBookService(title);

    if (result.err) {
      setErrorMsg(result.err);
      return;
    }

    setBooks((prev) => [...prev, result.data!]);
  };

  const deleteBookById = async (id: number) => {
    const result = await deleteBookService(id);

    if (result.err) {
      setErrorMsg(result.err);
      return;
    }
    
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newtitle: string) => {
    const result = await editBookService(id, newtitle);

    if (result.err) {
      setErrorMsg(result.err);
      return;
    }
    const updatedBook = result.data;

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <div className="app">
        <h1 className="title">Reading List</h1>
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
        <BookCreate addBook={createBook} />
      </div>
    </>
  );
}

export default App;
