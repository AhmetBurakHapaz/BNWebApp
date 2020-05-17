import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function stockRemoveReducer(state = initialState.stockRemove, action) {
  switch (action.type) {
    case actionTypes.STOCK_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
