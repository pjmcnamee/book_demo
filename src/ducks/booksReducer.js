import axios from "axios";

const initialState = {
  books: [],
  book: []
};

const GET_BOOKS = "GET_BOOKS";
const GET_ONE_BOOK = "GET_ONE_BOOK";

export function getAllBooks() {
  let books = axios.get("/api/books").then(res => {
    return res.data;
  });
  return {
    payload: books,
    type: GET_BOOKS
  };
}

export function getOneBook() {
  return {
    payload: axios.get("/api/books").then(res => {
		let index = res.data.length - 1;
		let book = res.data[index];
		console.log(book)
		return book;
	  }),
    type: GET_ONE_BOOK
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS + "_FULFILLED":
      return { ...state, books: action.payload };
    case GET_ONE_BOOK + "_FULFILLED":
      return { ...state, book: action.payload };
    default:
      return state;
  }
}
