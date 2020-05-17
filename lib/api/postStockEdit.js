import axios from "axios";
var stockEdit = "";
import {message} from "antd"

const error = () => {
    message.error("Bir Hata Oluştu!");
  };
  const success = () => {
    message.success("Stok Düzenleme Başarılı Şekilde Gerçekleştirildi!");
  };


export default async function postStockEdit(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                stockEdit = res.data;
                success();
                setTimeout(() => {
                    window.location.reload(false);
                  }, 500); 
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return stockEdit;
}