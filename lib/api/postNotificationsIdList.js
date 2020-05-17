import axios from "axios";
var idList = "";

export default async function postNotificationIdList(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                idList = res.data;
            } else {
                console.log(res.data.message);
            }
        })
        .catch(err => console.log(err));
    return idList;
}