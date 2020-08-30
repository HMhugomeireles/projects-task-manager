import React from "react";
import { INITIAL_USERS, UserActionsTypes } from "../constants/users";
import { UsersReducer } from "./../reducers/users";
import { StatusContext } from "./StatusContext";
import { AppStatusActionsTypes } from "../constants/status";

export const AuthenticationContext = React.createContext(null);

export function AuthenticationProvider({ children }) {
  const { statusDispatch } = React.useContext(StatusContext);
  const [user, userDispatch] = React.useReducer(UsersReducer, INITIAL_USERS);

  function authenticationUser(user) {
    //statusDispatch({ type: AppStatusActionsTypes.LOADING });
    userDispatch({ type: UserActionsTypes.LOGIN, payload: user });
  }

  function createUser(user) {
    userDispatch({ type: UserActionsTypes.CREATE_ACCOUNT }, user);
  }

  function isAuthenticated() {
    if (user.isLogged) return true;
    return false;
  }

  React.useEffect(() => {}, [user]);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        authenticationUser,
        createUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
