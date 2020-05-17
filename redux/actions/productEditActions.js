import * as actionTypes from "./actionTypes";
import postProductEdit from "../../lib/api/postProductEdit";

export const productEdit = productEdit => {
  return {
    type: actionTypes.STOCK_EDIT,
    payload: productEdit
  };
};

export function productEditPage(obj) {
  return function(dispatch) {
    postProductEdit(obj).then(res => {
      dispatch(productEdit(res));
    });
  };
}
