import * as actionTypes from "./actionTypes";
import postToken from "../../lib/api/postToken";
import  Router  from "next/router";

import {message } from "antd"

const error = () => {
  message.error("Lütfen Giriş Yapın");
};


export const ProfileInfo = profile => {
  return {
    type: actionTypes.PROFILE_VIEW_PAGE,
    payload: profile
  };
};

export function ProfileInformation(obj) {
  return function(dispatch) {
    postToken(obj).then(res => {
      dispatch(ProfileInfo(res));
      if (res != "") {
      } else {
        error();
      }
    });
  };
}

