import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

  export default function notificaitonViewReducer(state = initialState.notification, action) {
     switch (action.type) {
     case actionTypes.NOTIFICATION_VIEW_PAGE:
        return action.payload;
     default:
       return state;
    }
 }