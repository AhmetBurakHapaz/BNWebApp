import * as actionTypes from "./actionTypes";
import postMyOrders from "../../lib/api/postMyOrders";

export const myOrders = myOrder => {
  return {
    type: actionTypes.MY_ORDERS,
    payload: myOrder
  };
};

export function myOrdersPage(obj) {
  return function(dispatch) {
    postMyOrders(obj).then(res => {
      dispatch(myOrders(res));
    });
  };
}