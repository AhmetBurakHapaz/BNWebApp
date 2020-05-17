import * as actionTypes from "./actionTypes";
import postNotificationsIdList from "../../lib/api/postNotificationsIdList";

export const notificationIdList = notificatonIdList => {
  return {
    type: actionTypes.NOTIFICATION_ID_LIST,
    payload: notificatonIdList
  };
};

export function notificationIdListPage(obj) {
  return function(dispatch) {
    postNotificationsIdList(obj).then(res => {
      dispatch(notificationIdList(res));
    });
  };
}
