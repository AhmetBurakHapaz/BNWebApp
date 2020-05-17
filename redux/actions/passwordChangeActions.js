import * as actionTypes from "./actionTypes";
import postChangePassword from "../../lib/api/postChangePassword";

export const passwordChange = password => {
  return {
    type: actionTypes.PASSWORD_CHANGE,
    payload: password
  };
};

export function passwordChangePage(obj) {
  return function(dispatch) {
      postChangePassword(obj).then(res => {
      dispatch(passwordChange(res));
      
    });
  };
}