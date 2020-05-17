import * as actionTypes from "./actionTypes";
import postNotificationView from "../../lib/api/postNotificationView";

export const notificationView = notification => {
  return {
    type: actionTypes.NOTIFICATION_VIEW_PAGE,
    payload: notification
  };
};

export function notificationViewPage(obj) {
  return function(dispatch) {
    postNotificationView(obj).then(res => {
      dispatch(notificationView(res));
    });
  };
}