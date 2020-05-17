import * as actionTypes from "./actionTypes";
import postNotificationToPerson from "../../lib/api/postNotificationToPerson";

export const notificationToPerson = notification3 => {
  return {
    type: actionTypes.NOTIFICATION_TO_PERSON,
    payload: notification3
  };
};

export function notificationToPersonPage(obj) {
  return function(dispatch) {
    postNotificationToPerson(obj).then(res => {
      dispatch(notificationToPerson(res));
    });
  };
}
