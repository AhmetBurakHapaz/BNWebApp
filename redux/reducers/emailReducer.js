import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function emailReducer(state = initialState.email, action) {
  switch (action.type) {
    case actionTypes.GET_EMAIL:
      return action.payload;
    default:
      return state;
  }
}