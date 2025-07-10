export interface Book {
  id: number;
  title: string;
}

export interface BooksSuccessReponse {
  data: Book[];
  err: null;
}

export interface BooksFailureResponse {
  data: Book[];
  err: string;
}

export type FetchBooksResponse = BooksSuccessReponse | BooksFailureResponse;

export interface BookSuccessResponse {
  data: Book;
  err: null;
}

export interface BookFailureResponse {
  data: null;
  err: string;
}

export type BookResponse = BookSuccessResponse | BookFailureResponse;
