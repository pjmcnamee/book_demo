import axios from 'axios'

const initialState = {
	books: []
}

const GET_BOOKS = "GET_BOOKS"

export function getAllBooks(){
	let books = axios.get('/api/books').then(res => {
		return res.data
	})
	return {
		payload: books,
		type: GET_BOOKS
	}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_BOOKS + "_FULFILLED":
		return {...state, books: action.payload}
		default:
		return state;
	}
}