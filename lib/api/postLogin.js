import axios from "axios";
import {message} from "antd"
var token = "";

const success = () => 
{
    message.success("Giriş Başarılı!")
}
export default async function postLogin(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                token = res.data.user_token;
                success()
            } else {
                token = "";
                message.info(res.data.message);
            }
        })
        .catch(err => console.log(err));
    return token;
}