import axios from "axios";
import type {
  Book,
  CreateBookResponse,
  FetchBooksResponse,
} from "../types/bookTypes";

const BASE_URL = "http://localhost:3001/books";

export const fetchBooks = async (retry = 2): Promise<FetchBooksResponse> => {
  try {
    const response = await axios.get(BASE_URL);
    return { data: response.data, err: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // Optional: log raw error somewhere like Sentry or console
    console.error("Fetch books error:", err);

    if (retry > 0) {
      await new Promise((res) => setTimeout(res, 1000)); // wait 1 sec
      return fetchBooks(retry - 1);
    }

    // Friendly message for the UI
    return {
      data: [],
      err: "Failed to fetch books. Please check your internet connection or try again later.",
    };
  }
};

export const createBook = async (
  title: string
): Promise<CreateBookResponse> => {
  try {
    const response = await axios.post(BASE_URL, { title });
    return { data: response.data, err: null };
  } catch (err) {
    // Optional: log raw error somewhere like Sentry or console
    console.error("Fetch books error:", err);
    // Friendly message for the UI
    return {
      data: null,
      err: "Failed to create book. Please check your internet connection or try again later.",
    };
  }
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
