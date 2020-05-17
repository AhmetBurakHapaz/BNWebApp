import * as actionTypes from "./actionTypes";
import postToken from "../../lib/api/postToken";

export const ProfileInformation = profile => {
  return {
    type: actionTypes.PROFILE_VIEW_PAGE,
    payload: profile
  };
};

export function ProfileInformation(obj) {
  return function(dispatch) {
    postToken(obj).then(res => {
      dispatch(ProfileInformation(res));
    });
  };
}
