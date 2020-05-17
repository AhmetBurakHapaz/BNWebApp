import * as actionTypes from "./actionTypes";
import initialState from "../reducers/initialState";

export const country = country => {
  return {
    type: actionTypes.COUNTRY,
    payload: country
  };
};
