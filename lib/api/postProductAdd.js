import axios from "axios";
import {message} from "antd"
var product = "";

const error = () => {
    message.error("Ürün Eklerken Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Ürün Ekleme İşlemi Başarılı Şekilde Gerçekleştirildi!");
  };

export default async function postProductAdd(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                product = res.data;
                success();
                setTimeout(() => {
                    window.location.reload(false);
                  }, 500); 
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return product;
}