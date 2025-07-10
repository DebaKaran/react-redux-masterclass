import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import UseEffectPlayground from "./components/UseEffectPlayground";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []); // ← this ensures it runs only once when the component mounts

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title.trim(),
    });

    setBooks((prev) => [...prev, response.data]);
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
    // <div className="app">
    //   <h1 className="title">Reading List</h1>
    //   <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    //   <BookCreate addBook={createBook} />
    // </div>
    <UseEffectPlayground />
  );
}

export default App;
