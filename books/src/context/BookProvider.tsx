import { useEffect, useState, type ReactNode } from "react";
import type { Book } from "../types/bookTypes";

import {
  fetchBooks as fetchBooksService,
  createBook as createBookService,
  deleteBookById as deleteBookService,
  editBookById as editBookService,
} from "../services/bookService";

import BookContext from "./bookContext";

type BookProviderProps = {
  children: ReactNode;
};

const BookProvider = ({ children }: BookProviderProps) => {
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
    <BookContext.Provider
      value={{
        books,
        errorMsg,
        createBook,
        deleteBookById,
        editBookById,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
