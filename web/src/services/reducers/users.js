import { createAccount, loginUser, logoutUser } from "../actions/users";
import { UserActionsTypes } from "../constants/users";

const UserActionsStrategy = {
  [UserActionsTypes.LOGIN]: loginUser,
  [UserActionsTypes.LOGOUT]: logoutUser,
  [UserActionsTypes.CREATE_ACCOUNT]: createAccount,
  DEFAULT: (state) => state,
};

export const UsersReducer = (state, action) => {
  const strategy =
    UserActionsStrategy[action.type] === undefined
      ? UserActionsStrategy.DEFAULT
      : UserActionsStrategy[action.type];

  console.log(strategy);

  return strategy(state, action);
};
