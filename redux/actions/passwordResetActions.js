import * as actionTypes from "./actionTypes";
import postResetPassword from "../../lib/api/postResetPassword";

export const passwordReset = email => {
  return {
    type: actionTypes.PASSWORD_RESET,
    payload: email
  };
};

export function passwordResetPage(obj) {
  return function(dispatch) {
      postResetPassword(obj).then(res => {
      dispatch(passwordReset(res));
      
    });
  };
}