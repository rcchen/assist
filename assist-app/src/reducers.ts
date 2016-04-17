import { combineReducers } from "redux";

import { REQUEST_USER, RECEIVE_USER } from "./actions";

function user(state: { user?: Github.User } = {}, action: any) {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

export const assistApp = combineReducers({
  user
});
