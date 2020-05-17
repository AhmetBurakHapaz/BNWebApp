import * as actionTypes from "./actionTypes";
import postProductList from "../../lib/api/postProductList";

export const ProductInformation = product => {
  return {
    type: actionTypes.PRODUCT_LIST,
    payload: product
  };
};

export function ProductPage(obj) {
  return function(dispatch) {
    postProductList(obj).then(res => {
      dispatch(ProductInformation(res));
    });
  };
}
