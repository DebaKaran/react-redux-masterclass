import { createContext, useContext } from "react";
import type { BookContextType } from "../types/BookContextType";

const BookContext = createContext<BookContextType>({} as BookContextType);

// Hook for easy access
export const useBooks = () => useContext(BookContext);

export default BookContext;
