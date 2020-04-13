import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function stockViewReducer(state = initialState.stock, action) {
  switch (action.type) {
    case actionTypes.STOCK_VIEW_PAGE:
      return action.payload;
    default:
      return state;
  }
}
