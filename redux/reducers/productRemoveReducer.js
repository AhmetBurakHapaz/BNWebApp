import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function productRemoveReducer(state = initialState.productRemove, action) {
  switch (action.type) {
    case actionTypes.PRODUCT_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
