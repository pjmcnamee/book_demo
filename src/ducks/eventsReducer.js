import axios from "axios"

const initialState = {
	events: []
}

const GET_EVENTS = "GET_EVENTS"

export function getEvents() {
	return {
		payload: axios.get('/api/events').then(res => res.data),
		type: GET_EVENTS
	}
}


export default function reducer(state = initialState, action){
	switch (action.type) {
		case GET_EVENTS + "_FULFILLED":
		return {...state, events: action.payload}
		default:
		return state
	}
}