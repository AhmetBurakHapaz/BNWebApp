import axios from "axios";
import {message} from "antd"
var device = "";

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Ürün Başarılı Şekilde Eklendi!");
  };

export default async function postAddDevice(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                device = res.data;
                success();
                setTimeout(() => {
                    window.location.reload(false);
                  }, 500); 
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return device;
}