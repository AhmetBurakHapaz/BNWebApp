import * as actionTypes from "./actionTypes";
import postToken from "../../lib/api/postStockView";

export const StockView = stock => {
  return {
    type: actionTypes.STOCK_VIEW_PAGE,
    payload: stock
  };
};

export function postStockView(obj) {
  return function(dispatch) {
    postToken(obj).then(res => {
      console.log(res);
      dispatch(StockView(res));
    });
  };
}
