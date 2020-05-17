import * as actionTypes from "./actionTypes";
import postProductAdd from "../../lib/api/postProductAdd";

export const productAdd = product => {
  return {
    type: actionTypes.PRODUCT_ADD,
    payload: product
  };
};

export function productAddPage(obj) {
  return function(dispatch) {
    postProductAdd(obj).then(res => {
      dispatch(productAdd(res));
    });
  };
}
