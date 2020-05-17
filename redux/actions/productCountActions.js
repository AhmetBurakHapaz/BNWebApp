import * as actionTypes from "./actionTypes";
import postProductCount from "../../lib/api/postProductCount";

export const productCount = product => {
  return {
    type: actionTypes.PRODUCT_COUNT,
    payload: product
  };
};

export function productCountPage(obj) {
  return function(dispatch) {
    postProductCount(obj).then(res => {
      dispatch(productCount(res));
    });
  };
}
