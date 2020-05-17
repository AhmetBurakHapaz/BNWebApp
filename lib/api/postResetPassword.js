import axios from "axios";
import {message} from "antd"
var email = "";

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Şifre Değiştirme İstemi Alındı!");
  };

export default async function postResetPassword(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                email = res.data;
                success();
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return email;
}