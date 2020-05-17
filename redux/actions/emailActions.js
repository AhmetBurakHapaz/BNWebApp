import * as actionTypes from "./actionTypes";

export function getEmail(email) {
  
    return { 
        type: actionTypes.GET_EMAIL, 
        payload: email };
  }

