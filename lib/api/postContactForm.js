import axios from "axios";
import {message} from "antd"
var contact = "";

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Başarılı Şekilde Gerçekleştirildi!");
  };

export default async function postContactForm(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                contact = res.data;
                success();
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return contact;
}