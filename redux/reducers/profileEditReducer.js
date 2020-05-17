import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function profileEditReducer(state = initialState.profileedit, action) {
  switch (action.type) {
    case actionTypes.PROFILE_EDIT_PAGE:
      return action.payload;
    default:
      return state;
  }
}
