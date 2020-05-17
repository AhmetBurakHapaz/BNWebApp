import * as actionTypes from "./actionTypes";
import postLogin from "../../lib/api/postLogin";
import Router from "next/router";
import { message } from 'antd';

export const setCurrentUser = token => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: token
  };
};

const success = () => {
  message.success("Başarıyla Giriş Yapıldı.");
};

const error = () => {
  message.error("Email veya şifre hatalı.");
};

export function loginUser(obj) {
  return function(dispatch) {
    postLogin(obj).then(res => {
      dispatch(setCurrentUser(res));
      if (res != "") {
        Router.push("/homepage");
      }
    });
  };
}
