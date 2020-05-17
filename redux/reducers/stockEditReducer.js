import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function stockEditReducer(state = initialState.stockEdit, action) {
  switch (action.type) {
    case actionTypes.STOCK_EDIT:
      return action.payload;
    default:
      return state;
  }
}
