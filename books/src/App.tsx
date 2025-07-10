import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useBooks } from "./context/bookContext";

function App() {
  const { books, errorMsg, createBook, deleteBookById, editBookById } =
    useBooks();

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
