import { ADD_BOOK } from "./types";

export function setBook(books) {
    return {
      type: ADD_BOOK,
      book:books
    };
  }