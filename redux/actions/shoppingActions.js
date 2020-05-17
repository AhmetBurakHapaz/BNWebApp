import * as actionTypes from "./actionTypes";
import postShopping from "../../lib/api/postShopping";

export const shoppingAdd = shopping => {
  return {
    type: actionTypes.SHOPPING_CART,
    payload: shopping
  };
};

export function shoppingPage(obj) {
  return function(dispatch) {
    postShopping(obj).then(res => {
      dispatch(shoppingAdd(res));
    });
  };
}