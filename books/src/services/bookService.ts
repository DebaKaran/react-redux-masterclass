import axios from "axios";
import type { Book, FetchBooksResponse } from "../types/bookTypes";

const BASE_URL = "http://localhost:3001/books";

export const fetchBooks = async (): Promise<FetchBooksResponse> => {
  try {
    const response = await axios.get(BASE_URL);
    return { data: response.data, err: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // Optional: log raw error somewhere like Sentry or console
    console.error("Fetch books error:", err);

    // Friendly message for the UI
    return {
      data: [],
      err: "Failed to fetch books. Please check your internet connection or try again later.",
    };
  }
};

export const createBook = async (title: string): Promise<Book> => {
  const response = await axios.post(BASE_URL, { title });
  return response.data;
};

export const deleteBookById = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const editBookById = async (
  id: number,
  title: string
): Promise<Book> => {
  const response = await axios.put(`${BASE_URL}/${id}`, { title });
  return response.data;
};
