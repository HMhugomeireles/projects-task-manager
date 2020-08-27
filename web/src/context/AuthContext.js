import React from "react";
import axios from "axios";
import { Api } from "../Api/api";

export const AuthenticationContext = React.createContext(null);

export function AuthenticationProvider({ children }) {
  const [user, setUser] = React.useState({
    username: undefined,
    token: undefined,
    isLogged: false,
  });

  async function authenticationUser(user) {
    const response = await axios({
      method: Api.user.authentication.method,
      url: Api.user.authentication.url,
      data: { ...user },
    });

    const { status, data } = response;

    if (!data.error || status === 202) {
      setUser({
        username: data.user.username,
        token: data.token,
        isLogged: true,
      });

      return true;
    }

    return data.error;
  }

  async function createUser(user) {
    const response = await axios({
      method: "PUT",
      url: Api.user.registration,
      data: user,
    });
    return response;
  }

  function saveToken(token) {
    setUser({ ...user, token });
  }

  function isAuthenticated() {
    if (user.isLogged) {
      return true;
    }
    return false;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        saveToken,
        authenticationUser,
        createUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
