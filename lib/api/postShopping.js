import axios from "axios";
import {message} from "antd"
import Router from "next/router"
var shopping = "";

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Siparişiniz Başarıyla Alınmıştır!");
  };

export default async function postShopping(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            console.log(res)
            if (!res.data.error) {
                shopping = res.data;
                success();

                setTimeout(() => 
                {
                    Router.push("/myorders")
                }, 700);
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return shopping;
}