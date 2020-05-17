import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function registerControlReducer(state = initialState.token, action) {
  switch (action.type) {
    case actionTypes.REGISTER_CONTROL:
      return action.payload;
    default:
      return state;
  }
}