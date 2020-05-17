import * as actionTypes from "./actionTypes";
import postProductRemove from "../../lib/api/postProductRemove";

export const productRemove = product => {
  return {
    type: actionTypes.PRODUCT_REMOVE,
    payload: product
  };
};

export function productRemovePage(obj) {
  return function(dispatch) {
    postProductRemove(obj).then(res => {
      dispatch(productRemove(res));
    });
  };
}
