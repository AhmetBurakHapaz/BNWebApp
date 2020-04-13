import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function profileViewReducer(state = initialState.profile, action) {
  switch (action.type) {
    case actionTypes.PROFILE_VIEW_PAGE:
      return action.payload;
    default:
      return state;
  }
}
