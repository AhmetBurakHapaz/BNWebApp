import * as actionTypes from "./actionTypes";
import postNotificationToEveryone from "../../lib/api/postNotificationToEveryone";

export const notificationToEveryone = notification2 => {
  return {
    type: actionTypes.NOTIFICATION_TO_EVERYONE,
    payload: notification2
  };
};

export function notificationToEveryonePage(obj) {
  return function(dispatch) {
    postNotificationToEveryone(obj).then(res => {
      dispatch(notificationToEveryone(res));
    });
  };
}
