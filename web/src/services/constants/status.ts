// * Initial State Object

export const INITIAL_STATUS = {
  APPLICATION_STATUS: "STANDBY",
  error: {
    message: undefined,
    stack: undefined,
  },
};

// * Action Types

export const AppStatusActionsTypes = {
  WAITING: "WAITING",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
