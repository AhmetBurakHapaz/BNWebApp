import axios from "axios";
import {message} from "antd"
import Router from "next/router"
var password = "";

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Şifre Değişimi Başarılı Şekilde Gerçekleştirildi!");
  };

export default async function putChangePassword(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                password = res.data;
                success();
                setTimeout(() => {
                    Router.push("/homepage")
                  }, 500); 
            } else {
                message.info(res.data.message)
            }
        })
        .catch(err => console.log(err));
    return password;
}