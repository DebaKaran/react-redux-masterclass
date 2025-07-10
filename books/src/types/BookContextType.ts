import type { Book } from "./bookTypes";

export type BookContextType = {
  books: Book[];
  errorMsg: string | null;
  createBook: (title: string) => Promise<void>;
  deleteBookById: (id: number) => Promise<void>;
  editBookById: (id: number, newtitle: string) => Promise<void>;
};
