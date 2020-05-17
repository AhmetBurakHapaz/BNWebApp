import * as actionTypes from "./actionTypes";
import postStockRemove from "../../lib/api/postStockRemove";

export const stockRemove = product => {
  return {
    type: actionTypes.STOCK_REMOVE,
    payload: product
  };
};

export function stockRemovePage(obj) {
  return function(dispatch) {
    postStockRemove(obj).then(res => {
      dispatch(stockRemove(res));
    });
  };
}
