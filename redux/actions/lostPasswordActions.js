import * as actionTypes from "./actionTypes";
import postLostPassword from "../../lib/api/postLostPassword";

export const lostPasswordControl = lostpassword => {
  return {
    type: actionTypes.LOST_PASSWORD_CONTROL,
    payload: lostpassword
  };
};

export function lostPasswordControlPage(obj) {
  return function(dispatch) {
    postLostPassword(obj).then(res => {
      dispatch(lostPasswordControl(res));
    });
  };
}