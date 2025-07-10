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

export interface CreateBookSuccessResponse {
  data: Book;
  err: null;
}

export interface CreateBookFailureResponse {
  data: null;
  err: string;
}

export type CreateBookResponse =
  | CreateBookSuccessResponse
  | CreateBookFailureResponse;
