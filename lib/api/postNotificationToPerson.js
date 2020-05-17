import axios from "axios";
import {notification} from "antd"
var person = "";

export default async function postNotificationToPerson(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                person = res.data;
                notification['success']({
                    message: ("Kişiye Özel Bildirim Başarıyla Gönderildi."),
                    placement: "bottomRight"
                  });
            } else {
                notification['error']({
                    message: ("Bildirim Gönderilemedi."),
                    placement: "bottomRight"
                  });
            }
        })
        .catch(err => console.log(err));
    return person;
}