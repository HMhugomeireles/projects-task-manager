import { getUserToken } from "../api/Users";

export function loginUser(state, action) {
  let result = getUserToken(action.payload);
  console.log("login", result);
  return state;
}

export function logoutUser(state, payload) {
  // set user logout
  return state;
}

export function createAccount(state, payload) {
  return state;
}
