import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function myOrdersReducer(state = initialState.myOrders, action) {
  switch (action.type) {
    case actionTypes.MY_ORDERS:
      return action.payload;
    default:
      return state;
  }
}