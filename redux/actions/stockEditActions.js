import * as actionTypes from "./actionTypes";
import postStockEdit from "../../lib/api/postStockEdit";

export const stockEdit = stockEdit => {
  return {
    type: actionTypes.STOCK_EDIT,
    payload: stockEdit
  };
};

export function stockEditPage(obj) {
  return function(dispatch) {
    postStockEdit(obj).then(res => {
      dispatch(stockEdit(res));
    });
  };
}
