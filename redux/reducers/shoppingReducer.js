import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function shoppingReducer(state = initialState.shopping, action) {
  switch (action.type) {
    case actionTypes.SHOPPING_CART:
      return action.payload;
    default:
      return state;
  }
}