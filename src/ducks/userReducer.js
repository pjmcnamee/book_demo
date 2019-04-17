import axios from "axios";

const intialState = {
  id: null,
  admin: false,
  email: "",
  firstName: "",
  lastName: "",
  age: 0,
  newsLetter: false
};

const GET_USER = "GET_USER";
const KILL_USER = "KILL_USER";

export function getData() {
  let data = axios.get("/auth/user-data").then(res => {
    return res.data;
  });
  return {
    payload: data,
    type: GET_USER
  };
}

export function killUser() {
  let data = axios.get("/auth/logout");
  return {
    payload: data,
    type: KILL_USER
  };
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_USER + "_FULFILLED":
      return { ...state, ...action.payload };
    case KILL_USER + "_FULFILLED":
      return { ...intialState };
    default:
      return state;
  }
}
