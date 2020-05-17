import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes"

export default function countryReducer(state = initialState.country, action) {
  switch (action.type) 
  { //TOKEN AYARLAMA
    case actionTypes.COUNTRY:
      console.log("a")
        return state;   
    default:
      return state;
  }
}
