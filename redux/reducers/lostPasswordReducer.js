import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function lostPasswordReducer(state = initialState.lostpassword, action) {
  switch (action.type) {
    case actionTypes.LOST_PASSWORD_CONTROL:
      return action.payload;
    default:
      return state;
  }
}