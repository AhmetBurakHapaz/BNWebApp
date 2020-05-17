import * as actionTypes from "./actionTypes";
import postRegisterControl from "../../lib/api/postRegisterControl";

export const registerControl = token => {
  return {
    type: actionTypes.REGISTER_CONTROL,
    payload: token
  };
};

export function registerControlPage(obj) {
  return function(dispatch) {
    postRegisterControl(obj).then(res => {
      dispatch(registerControl(res));
    });
  };
}