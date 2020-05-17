import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function addDeviceReducer(state = initialState.device, action) {
  switch (action.type) {
    case actionTypes.ADD_DEVICE:
      return action.payload;
    default:
      return state;
  }
}