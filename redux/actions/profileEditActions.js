import * as actionTypes from "./actionTypes";
import postProfile from "../../lib/api/postProfile";


export const profileEdit = profileData => {
  return {
    type: actionTypes.PROFILE_EDIT_PAGE,
    payload: profileData
  };
};

export function profileEditPage(obj) {
  return function(dispatch) {
    postProfile(obj).then(res => {
      dispatch(profileEdit(res));
    });
  };
}
