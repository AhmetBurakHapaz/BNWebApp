import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productListReducer(state = initialState.product, action) {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST:
      return action.payload;
    default:
      return state;
  }
}
