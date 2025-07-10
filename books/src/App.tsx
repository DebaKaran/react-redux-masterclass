import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useBooks } from "./context/bookContext";

function App() {
  const { errorMsg } = useBooks();

  return (
    <>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <div className="app">
        <h1 className="title">Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}

export default App;
