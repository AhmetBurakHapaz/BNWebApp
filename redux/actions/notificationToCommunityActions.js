import * as actionTypes from "./actionTypes";
import postNotificationToCommunity from "../../lib/api/postNotificationToCommunity";

export const notificationToCommunity = notification1 => {
  return {
    type: actionTypes.NOTIFICATION_TO_COMMUNITY,
    payload: notification1
  };
};

export function notificationToCommunityPage(obj) {
  return function(dispatch) {
    postNotificationToCommunity(obj).then(res => {
      dispatch(notificationToCommunity(res));
    });
  };
}
