import React from "react";
import { INITIAL_STATUS, AppStatusActionsTypes } from "../constants/status";

export const StatusContext = React.createContext(null);

export function StatusContextProvider({ children }) {
  const [appStatus, statusDispatch] = React.useReducer(function (
    state,
    action
  ) {
    switch (action.type) {
      case AppStatusActionsTypes.SUCCESS:
        return {
          ...state,
          APPLICATION_STATUS: AppStatusActionsTypes.SUCCESS,
        };
      case AppStatusActionsTypes.LOADING:
        return {
          ...state,
          APPLICATION_STATUS: AppStatusActionsTypes.LOADING,
        };
      case AppStatusActionsTypes.WAITING:
        return {
          ...state,
          APPLICATION_STATUS: AppStatusActionsTypes.WAITING,
        };
      case AppStatusActionsTypes.ERROR:
        return {
          ...state,
          APPLICATION_STATUS: AppStatusActionsTypes.ERROR,
          error: {
            message: action.payload.error.message,
            stack: action.payload.error,
          },
        };
      default:
        return state;
    }
  },
  INITIAL_STATUS);

  return (
    <StatusContext.Provider value={{ appStatus, statusDispatch }}>
      {children}
    </StatusContext.Provider>
  );
}
