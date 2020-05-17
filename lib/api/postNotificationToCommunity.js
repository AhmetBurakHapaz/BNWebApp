import axios from "axios";
import {notification} from "antd"
var community = "";
export default async function postNotificationToCommunity(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                community = res.data;
                notification['success']({
                    message: ("Seçili Grup Bildirimi Başarıyla Gönderildi."),
                    placement: "bottomRight"
                  });
            } else {
                notification['error']({
                    message: ("Seçili Grup Bildirimi Gönderilemedi."),
                    placement: "bottomRight"
                  });
            }
        })
        .catch(err => console.log(err));
    return community;
}