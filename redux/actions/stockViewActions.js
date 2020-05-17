import * as actionTypes from "./actionTypes";
import postStockView from "../../lib/api/postStockView";

export const StockView = stock => {
  return {
    type: actionTypes.STOCK_VIEW_PAGE,
    payload: stock
  };
};

export function StockViewPage(obj) {
  return function(dispatch) {
    postStockView(obj).then(res => {
      dispatch(StockView(res));
    });
  };
}
