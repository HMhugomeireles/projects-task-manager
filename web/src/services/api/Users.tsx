import api, { resolveHeader } from "./config";
import endpoints from "./EndPoints";

const UserApi = {
  async login(userCredential) {
    const requestResult = api.post(
      endpoints.user.login,
      userCredential,
      resolveHeader()
    );
    return requestResult;
  },

  logoutUser() {
    const logout = api.post(endpoints.user.login, resolveHeader());
    return logout;
  },

  async createUser(user) {
    const userToken = await api.post(
      endpoints.user.login,
      user,
      resolveHeader()
    );
    return userToken;
  },
};

export default UserApi;
