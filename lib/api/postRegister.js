import axios from "axios";
import {message} from "antd"

const success = () =>
{
    message.success("Başarıyla Kayıt Olundu. Lütfen Mailinizi Kontrol Ediniz.")
}
const error = () =>
{
    message.error("Bir Hata Oluştu")
}
var register = "";
export default async function postRegister(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                success();
            } else {
                error();
            }
        })
        .catch(err => console.log(err));
    return register;
}