import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productEditReducer(state = initialState.productEdit, action) {
  switch (action.type) {
    case actionTypes.PRODUCT_EDIT:
      return action.payload;
    default:
      return state;
  }
}
