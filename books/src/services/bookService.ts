import axios from "axios";
import type { Book } from "../types/Book";

const BASE_URL = "http://localhost:3001/books";

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createBook = async (title: string): Promise<Book> => {
  const response = await axios.post(BASE_URL, { title });
  return response.data;
};

export const deleteBookById = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const editBookById = async (id: number, title: string): Promise<Book> => {
  const response = await axios.put(`${BASE_URL}/${id}`, { title });
  return response.data;
};