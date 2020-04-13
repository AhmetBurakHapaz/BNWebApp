import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function authReducer(state = initialState.login, action) {
  switch (action.type) {
    //TOKEN AYARLAMA
    case actionTypes.SET_CURRENT_USER:
      return action.payload;
    //TOKEN DEFAULT YAPMA
    case actionTypes.LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
}
