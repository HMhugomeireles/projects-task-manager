import api, { resolveHeader } from "./config";
import endpoints from "./EndPoints";

export async function getUserToken(userCredential) {
  let requestResult;
  await api
    .post(endpoints.user.login, userCredential, resolveHeader())
    .then((res) => (requestResult = res))
    .catch((err) => (requestResult = err));
  return requestResult;
}

export function logoutUser() {
  const logout = api.post(endpoints.user.login, resolveHeader());
  return logout;
}

export async function createUser(user) {
  const userToken = await api.post(endpoints.user.login, user, resolveHeader());
  return userToken;
}
