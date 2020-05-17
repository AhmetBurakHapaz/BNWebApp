import axios from "axios";
var notification = "";
export default async function postNotificationView(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                notification = res.data.notifications;
            } else {
            }
        })
        .catch(err => console.log(err));
    return notification;
}